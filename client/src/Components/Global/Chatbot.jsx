import { useEffect } from "react";

function ChatBot({ handleChatClick, status }) {
  function productRecs(agent) {
    return fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((products) => {
        if (products && products.length > 0) {
          console.log("Products received: ", products);
          const goProducts = (products) => {
            for (let i = 0; i < 2; i++) {
              // Limiting to 2 cards for testing
              const { title, image, description } = products[i];
              console.log(`products in loop:`, products[i]);
            }
          };
          goProducts(products);
        } else {
          agent.add("No products found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        agent.add("Sorry, I couldn't fetch the product recommendations.");
      });
  }

  useEffect(() => {
    productRecs();
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((products) => goProducts(products));
    // const goProducts = (products) => {
    //   for (let i = 0; i <= 10; i++) {
    //     const { title, image, description } = products[i];
    //     console.log(title);
    //   }
    // };
  }, []);

  return (
    // <iframe
    //   className={status ? "close-chat" : "open-chat"}
    //   onClick={handleChatClick}
    //   width="350"
    //   height="430"
    //   allow="microphone;"
    //   src="https://console.dialogflow.com/api-client/demo/embedded/ad595b13-9142-4d0d-ac7d-e0cb796b122d"
    // ></iframe>
    <df-messenger
      chat-icon="https:&#x2F;&#x2F;kropp.qodeinteractive.com&#x2F;wp-content&#x2F;uploads&#x2F;2022&#x2F;06&#x2F;cropped-favicon-32x32.png"
      intent="WELCOME"
      chat-title="Kropp Fitness ChatBot"
      agent-id="ad595b13-9142-4d0d-ac7d-e0cb796b122d"
      language-code="en"
    ></df-messenger>
  );
}
export default ChatBot;
