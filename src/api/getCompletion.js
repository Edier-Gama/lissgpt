async function useCompletion(apiKey, prompt) {
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
          "model": "text-davinci-003",
          "prompt": 'Dime hola en ingles',
          "max_tokens": 10,
          "temperature": 0
        })
      });
      const completion = await response.json();
      const responseText = completion.choices[0].text
      return {responseText}

    } catch (error) {
      console.error(error);
    }
}

export {useCompletion}