async function getCompletion(API_KEY, prompt) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": prompt}],
          "max_tokens": 300,
          "temperature": 0
        })
      });
      const completion = await response.json();
      const responseText = completion.message.content
      return responseText

    } catch (error) {
        console.log(error.message);
    }
}

export {getCompletion}