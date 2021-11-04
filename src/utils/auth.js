import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const serverUrl = process.env.NEXT_PUBLIC_HOST_API;

export async function handleAuthSSR(ctx) {
  let token = null;
  if (ctx.req&& ctx.req.headers.cookie) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    token = cookies.get('token')

  }

  try {
    const response = await axios.get(serverUrl + "/user/valid", { headers: { 'Authorization': token } });
  } catch (err) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login'
      })
      ctx.res.end()
    } else {
      Router.push('/login')
    }
  }
}

export async function handleAuthSSRLogin(ctx) {
  let token = null;
  if (ctx.req&&ctx.req.headers.cookie) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    token = cookies.get('token')
  }
  try {
      const response = await axios.get(serverUrl + "/user/valid", { headers: { 'Authorization': token } });
      if (response.data.status=='ok') {
        if (ctx.res) {
          ctx.res.writeHead(302, {
            Location: '/'
          })
          ctx.res.end()
        } else {
          Router.push('/')
        }
      } 
  } catch (err) {

  }
}