// Octokit.js

import { Octokit } from "@octokit/rest"

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.secret
  })
  
  const res = await octokit.request('POST /repos/kubehub-in/gh-first/dispatches', {
    event_type: 'build',
    client_payload: {
      unit: false,
      integration: true,
      env: "dev"
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const {url, status} = res
  console.log({url, status})