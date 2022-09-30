const FIREBASE_DOMAIN = "https://react-q-machine-default-rtdb.europe-west1.firebasedatabase.app/";

export const getAllQuotes = async () => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Could not fetch quotes");
    }

    const transformedQuotes = [];

    for (const key in data){
        transformedQuotes.push({
            id: key,
            ...data[key]
        });
    }

    return transformedQuotes;
}

export const getSingleQuote = async (id) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/quote/${id}.json`);
    const data = await response.json();


    if(!response.ok){
        throw new Error(data.message || "Could not fetch quote");
    }

    return {
        id,
        ...data
    }
}

export const addQuote = async (newQuote) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(newQuote),
        headers: {
            'ContentType':'application/json',
        }
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Could not create quote");
    }
    return null;
}

export const addComment = async (newComment, qId) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/quote/${qid}/comments.json`, {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'ContentType':'application/json',
        }
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Could not add comment");
    }
    return { commentId: data.name }
}

export const getAllComments = async (qId) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/quote/${qid}/comments.json`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Could not get comments");
    }
    const transformedComments = [];

    for (const key in data){
        transformedComments.push({
            id: key,
            ...data[key]
        });
    }

    return transformedComments;
}
