import fetch from 'node-fetch'

export async function getSortedQuotes() {
   const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
   const data = await res.json()
   return data
}