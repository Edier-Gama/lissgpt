async function getCompletion(API_KEY, prompt) {
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          "model": "text-davinci-003",
          "prompt": prompt,
          "max_tokens": 300,
          "temperature": 0
        })
      });
      const completion = await response.json();
      const responseText = completion.choices[0].text
      return responseText

    } catch (error) {
      if(error.status === 401){
        console.log(error.message);
      }
    }
}

export {getCompletion}