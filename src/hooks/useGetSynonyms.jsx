import { useState } from "react"
import { fetchSynonym } from "../api/fetchSynonym"

export const useGetSynonyms = () => {
    const [synonyms, setSynonym] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)

    const getSynonyms = (word) => {
        setIsLoading(true)
        fetchSynonym(word)
            .then(setSynonym)
            .then(() => setIsLoading(false))
    }

    return {isLoading, synonyms, getSynonyms, setSynonym}
}