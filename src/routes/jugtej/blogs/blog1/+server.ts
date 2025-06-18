export function GET() {
  const content = {
  "@context": "https://www.w3.org/ns/activitystreams",
  "id": "https://getdigip.in/jugtej/blogs/blog1",
  "type": "Note",
  "hash": "1dff22b5faf3fbebc5aaf2bb5b5dbe2c",
  "content": "\u003Cp\u003E\u003Cp\u003EChatGPT and most AI systems have biases, often manifesting as racism and discrimination, mirroring the biases present in human society and hence in the data we use to train such systems. And look, I am excited about AI, but sometimes we are moving too fast without thinking in the consequences.\u003C/p\u003E\n\u003Cp\u003ELast week we had our team monthly lunch, and as in other ocassions we were talked about everything, ranged from topics as cane sugar industry, spicy food levels, skiing, and of course, AI. The small talk was about tips on using Microsoft Teams and Copilot to summarize what people said in a chat after prolonged absences from the office. This sparked an idea for an experiment.\u003C/p\u003E\n\u003Cp\u003EI pondered whether Copilot or similar AI tools would summarize differently based on the perceived gender of the speaker. Would Copilot (or any other AI) summarize different what a perceived male says in a chat compared to what a female says? Would they emphasize distinct aspects of the conversation? If tasked with summarizing team interactions, would they assign more importance to comments made by male participants?\u003C/p\u003E\n\u003Cp\u003ETo formulate a hypothesis, I opted for a simpler experiment. I asked ChatGPT to generate an angry response from both a male and female perspective to a given paragraph. I took the paragraph from insights of a LinkedIn friend post (\u0026ldquo;The best engineers I have worked with have out of the box thinking\u0026rdquo;), then I proceed to ask in separate chats, so it did not polute with any state. Here are the results:\u003C/p\u003E\n\u003Cp\u003E\u003Cimg src=\u0022/img/responsibleai/angryman.png\u0022 alt=\u0022Male ChatGPT Response\u0022\u003E\u003C/p\u003E\n\u003Cp\u003E\u003Cimg src=\u0022/img/responsibleai/angrywoman.png\u0022 alt=\u0022Female ChatPGT Response\u0022\u003E\u003C/p\u003E\n\u003Cp\u003EIt just strucked me hard. And just in case this is not obvious, the male response discuss the ideas, it gives an angry response to the concept discussed. The female response goes directly to talk about genre, assuming this is a direct attack.\u003C/p\u003E\n\u003Cp\u003EWhile some might argue that this isn\u0026rsquo;t discrimination but rather a reflection of the challenges women often face in the tech industry, relying on AI without robust safeguards risks exacerbating inequalities rather than alleviating them. The titles of the responses underscore these differences.\u003C/p\u003E\n\u003Cp\u003E\u003Cimg src=\u0022/img/responsibleai/titles.png\u0022 alt=\u0022Titles of ChatGPT responses\u0022\u003E\u003C/p\u003E\n\u003Cp\u003EOne trick I learned from Azure PromptFlow is using LLMs to evaluate LLMs. So I asked ChatGPT to evaluate itself:\u003C/p\u003E\n\u003Cp\u003E\u003Cimg src=\u0022/img/responsibleai/score.png\u0022 alt=\u0022Scores of ChatGPT\u0022\u003E\u003C/p\u003E\n\u003Cp\u003E\u0026ldquo;The response seems to overly interpret the question as a gender stereotype, introducing bias where it may not have been intended.\u0026rdquo;. I agree ChatGPT, I agree.\u003C/p\u003E\n\u003Cp\u003EThough I was aware of bias in AI, (this is something I discussed briefly before in \u003Ca href=\u0022https://www.linkedin.com/posts/mahomedalid_midjourney-diversityandinclusion-diversity-activity-7141493212803739648-KN4Z?utm_source=share\u0026amp;utm_medium=member_desktop\u0022\u003E\u0026ldquo;The Evolution of Women\u0026rdquo;\u003C/a\u003E, the ease with which such examples are found still surprised me.\u003C/p\u003E\n\u003Cp\u003ERecently, I\u0026rsquo;ve been planning a video/blog-post series on Observability and LLMs (Large Language Models). I even developed a small library demonstrating \u003Ca href=\u0022https://github.com/microsoft/dotnet-llm-eval-samples\u0022\u003Ehow to evaluate LLM projects using OpenTelemetry and DotNet\u003C/a\u003E. While I haven\u0026rsquo;t had time to record the videos yet (I have \u003Ca href=\u0022https://www.youtube.com/watch?v=PsnlE3-KG30\u0022\u003Ea pilot video of an unrelated topic\u003C/a\u003E), I\u0026rsquo;m committed to doing so soon.\u003C/p\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EUpdate 3/16/2024: I finally manage to record some videos: \u003Ca href=\u0022https://www.youtube.com/watch?v=lBbRhekdtNw\u0026amp;list=PLPK0YODPQ5naaUwDNFay0mlRwaV_AbrX6\u0022\u003EOpen AI and LLMS From Zero to Hero, with Azure, DotNet, and Semantic Kernel\u003C/a\u003E.\u003C/p\u003E\u003C/blockquote\u003E\n\u003Cp\u003EApologies if this isn\u0026rsquo;t entirely polished;  I felt compelled to share these thoughts in a blog post, I think it is important to say it loud and early enough.\u003C/p\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cem\u003EAll answers were generated with ChatGPT 3.5\u003C/em\u003E\u003C/li\u003E\n\u003C/ul\u003E\n\u003C/p\u003E \u003Cp\u003EYou can read the article \u0022The Gendered Lens of AI: Unpacking Bias in Language Models\u0022 by \u003Ca href=\u0022https://hachyderm.io/users/mapache\u0022 class=\u0022u-url mention\u0022\u003E@\u003Cspan\u003Emapache\u003C/span\u003E\u003C/a\u003E \u003Ca href=\u0022https://maho.dev/2024/02/the-gendered-lens-of-ai-unpacking-bias-in-language-models/\u0022\u003Ehere\u003C/a\u003E as well.\u003C/p\u003E ",
  "url": "https://maho.dev/2024/02/the-gendered-lens-of-ai-unpacking-bias-in-language-models/",
  "attributedTo": "https://getdigip.in/jugtej/actor",
  "to": [
    "https://www.w3.org/ns/activitystreams#Public"
  ],
  "cc": [],
  "published": "2024-02-18T21:06:38-08:00",
  "tag": [
    {
      "Type": "Mention",
      "Href": "https://hachyderm.io/users/mapache",
      "Name": "\\@mapache@hachyderm.io"
    }
  ],
  "replies": {
    "id": "https://maho.dev/socialweb/replies/1dff22b5faf3fbebc5aaf2bb5b5dbe2c",
    "type": "Collection",
    "first": {
      "type": "CollectionPage",
      "next": "https://maho.dev/socialweb/replies/1dff22b5faf3fbebc5aaf2bb5b5dbe2c?page=true",
      "partOf": "https://maho.dev/socialweb/replies/1dff22b5faf3fbebc5aaf2bb5b5dbe2c",
      "items": []
    }
  }
}
const response = new Response(JSON.stringify(content), {headers: {'Content-Type': 'application/activity+json'}});

return response;
}