import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

const Auth: NextPage = () => {

  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "26374205-75fa-4616-9b42-c0d3a6735e63" } }
      )

      .then((r) => {
        router.push("/chats")
      })
  }

  return (
    <div className="background">
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Your Personal Chat App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </main>
    </div>
  )
}

export default Auth