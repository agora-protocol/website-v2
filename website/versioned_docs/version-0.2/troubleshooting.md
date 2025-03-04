---
id: troubleshooting
title: Troubleshooting
hide_table_of_contents: true
---

Your communication isn't working? Here's a list of common issues that might be causing it:

1. Your task isn't parsed correctly by the Sender
   a. If you're using `@sender.task`, add type annotations for parameters and returns
   b. Use Google-style docstrings, with `Parameters:` and `Arguments:`
   c. If it's still not working, you can either override the fields for `@sender.task` or manually build the Task
2. You're passing the wrong data to the Sender
   a. Most implementations do not verify the inputs for the Sender. Make sure that the data is formatted in the same manner as it's described to the task
3. The underlying LLM APIs are not responding
   a. Some LLMs (e.g. Gemini) are more likely to be affected by slowdowns and temporary downtimes. Try with more reliable LLM APIs (e.g. OpenAI) first
   b. Make sure that API keys are correctly configured. By default, API keys are loaded from `.env`
4. The LLMs are not interacting correctly with the Agora components
   a. Increase the number of retries for the components
   b. If the above solution doesn't work, override the component prompts to better suit your needs
5. You're connecting to the wrong port
   a. The ReceiverSender runs by default on port 5000. Check that you're connecting to the correct port
6. Your ReceiverServer is incorrectly configured
   a. `ReceiverSender.run` accepts Flask parameters. Make sure that your server is correctly configured to work in your environment

If despite everything you can't get your code to work, either [open an issue on Github](https://github.com/agora-protocol/python/issues/new) or [check out the Discord](https://discord.gg/MXmfhwQ4FB).
