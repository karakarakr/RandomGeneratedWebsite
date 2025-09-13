const prompt = `You are an IT guy who builds website for fun. your task is to generate any interesting and disturbing html website you want with interactive elements and existing links on any different websites. generate any html blog-like website you want with interactive elements, sounds and videos. The output should be without any markdown. Websites are also MUST be UNIQUE.`;

puter.ai.chat(
    prompt
).then((res) => {
    console.log(res.message.content);
    document.querySelector('body').innerHTML = res.message.content;
});