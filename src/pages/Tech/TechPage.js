import React from "react";

import "./TechPage.css";

const TechPage = () => {
  return (
    <div style={{ paddingTop: "110px" }}>
      <div class="stack-container">
        <h3>Backend</h3>
        <div class="stack-type-container">
          <a
            class="card-wrapper"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Typescript"
                    class=""
                    src="https://rocketmakers-cosmos-api.herokuapp.com/upload/6f76e9eb-3b03-46c6-b6c7-3b57f8404205"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Python"
                    class=""
                    src="https://www.pikpng.com/pngl/b/62-626662_python-transparent-png-python-language-clipart.png"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://www.java.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Java"
                    class=""
                    src="data:image/png;base64,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"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Postgres"
                    class=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="figma"
                    class=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowUEQ_j_UWInakO3_yDVvxpxAxWF5AVBP_Q&usqp=CAU"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://swagger.io/docs/specification/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Blender"
                    class=""
                    src="data:image/png;base64,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"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Adobe Illustrator"
                    class=""
                    src="https://rocketmakers-cosmos-api.herokuapp.com/upload/d69f9283-95d1-4f0e-b113-ebcec89d004d"
                  />
                </picture>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div class="stack-container">
        <h3>Frontend</h3>
        <div class="stack-type-container">
          <a
            class="card-wrapper"
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Vue"
                    class=""
                    src="https://vuejs.org/images/logo.png"
                  />
                </picture>
              </span>
            </div>
          </a>

          <a
            class="card-wrapper"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="Typescript"
                    class=""
                    src="https://rocketmakers-cosmos-api.herokuapp.com/upload/6f76e9eb-3b03-46c6-b6c7-3b57f8404205"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://www.w3schools.com/html/html5_intro.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="HTML5"
                    class=""
                    src="https://rocketmakers-cosmos-api.herokuapp.com/upload/d9ed8c6b-b1f5-4cfa-b986-ef8bdd2c5941"
                  />
                </picture>
              </span>
            </div>
          </a>
          <a
            class="card-wrapper"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="React"
                    class=""
                    src="https://rocketmakers-cosmos-api.herokuapp.com/upload/2e26524b-a030-4576-b737-76fd66bcf89f"
                  />
                </picture>
              </span>
            </div>
          </a>

          <a
            class="card-wrapper"
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card stack-item" data-can-click="false">
              <span class="lazy-image-wrapper">
                <picture class="armstrong-picture" data-loaded="true">
                  <img
                    alt="SASS"
                    class=""
                    src="https://rocketmakers-cosmos-api.herokuapp.com/upload/043ec92a-f3bf-48d9-9658-0437ac1f8379"
                  />
                </picture>
              </span>
            </div>
          </a>
        </div>
        <div class="stack-container">
          <h3>Infrastructure</h3>
          <div class="stack-type-container">
            <a
              class="card-wrapper"
              href="https://www.elastic.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Elastic"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/120b84fe-089d-42b8-9601-0ea133a8c662"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Amazon Web Services"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/0c9e9419-8b69-437a-8ac6-f57cec41aedf"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://www.terraform.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Terraform"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/2854d37b-c7b1-4d5b-880d-e0458fe101ae"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://azure.microsoft.com/en-gb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Microsoft Azure"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/ce2dac61-7e93-43c6-bbab-c4efe694e7e9"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://kubernetes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Kubernetes"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/8f83b8e6-40ad-49fd-a2c6-0b76dad26106"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://cloud.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Google Cloud"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/79b2ffc2-b605-448c-80ce-ff1622eedcbd"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://gitlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="GitLab"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/34ddcb61-04ef-4262-af20-a92660fb9b02"
                    />
                  </picture>
                </span>
              </div>
            </a>
            <a
              class="card-wrapper"
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card stack-item" data-can-click="false">
                <span class="lazy-image-wrapper">
                  <picture class="armstrong-picture" data-loaded="true">
                    <img
                      alt="Docker"
                      class=""
                      src="https://rocketmakers-cosmos-api.herokuapp.com/upload/f68fcd6a-341f-4684-af34-2bf577318478"
                    />
                  </picture>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPage;
