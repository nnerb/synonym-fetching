const API_URL = import.meta.env.VITE_API_URL ?? `https://api.datamuse.com`

export const fetchSynonym =  async (word) => {
    const res = await fetch(`${API_URL}/words?rel_syn=${word}`)
    const data = await res.json()
    return data
}   