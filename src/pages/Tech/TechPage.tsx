import React from 'react';
import { Icon } from '@iconify/react';

import './TechPage.scss';

export const TechPage = () => {
  return (
    <div>
      <div className="techpage-title">Our Technologies</div>
      <div className="stack-container">
        <h3 className="stack-container-title">Backend</h3>
        <div className="stack-type-container">
          <a
            className="card-wrapper"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon
                  height={'100%'}
                  width={'100%'}
                  icon="vscode-icons:file-type-typescript-official"
                />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon height={'100%'} width={'100%'} icon="logos:python" />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://www.java.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon height={'100%'} width={'100%'} icon="logos:java" />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon height={'100%'} width={'100%'} icon="logos:postgresql" />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon
                  height={'100%'}
                  width={'100%'}
                  icon="vscode-icons:file-type-mongo"
                />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://swagger.io/docs/specification/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon
                  height={'100%'}
                  width={'100%'}
                  icon="file-icons:swagger"
                  color="rgb(56,184,50)"
                />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon
                  height="100%"
                  width="100%"
                  icon="vscode-icons:file-type-node"
                />
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="stack-container">
        <h3 className="stack-container-title">Frontend</h3>
        <div className="stack-type-container">
          <a
            className="card-wrapper"
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <Icon height={'100%'} width={'100%'} icon="logos:vue" />
            </div>
          </a>

          <a
            className="card-wrapper"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon
                  height={'100%'}
                  width={'100%'}
                  icon="vscode-icons:file-type-typescript-official"
                />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://www.w3schools.com/html/html5_intro.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon height={'100%'} width={'100%'} icon="logos:html-5" />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon width={'100%'} height={'100%'} icon="logos:react" />
              </span>
            </div>
          </a>

          <a
            className="card-wrapper"
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon width={'100%'} height={'100%'} icon="logos:sass" />
              </span>
            </div>
          </a>
          <a
            className="card-wrapper"
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card stack-item" data-can-click="false">
              <span className="lazy-image-wrapper">
                <Icon
                  width={'100%'}
                  height={'100%'}
                  icon="logos:angular-icon"
                />
              </span>
            </div>
          </a>
        </div>
        <div className="stack-container">
          <h3 className="stack-container-title">Infrastructure</h3>
          <div className="stack-type-container">
            <a
              className="card-wrapper"
              href="https://www.elastic.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon
                    height={'100%'}
                    width={'100%'}
                    icon="vscode-icons:file-type-elastic"
                  />
                </span>
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon height={'100%'} width={'100%'} icon="logos:aws" />
                </span>
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://www.terraform.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon
                    height={'100%'}
                    width={'100%'}
                    icon="logos:terraform-icon"
                  />
                </span>
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://azure.microsoft.com/en-gb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon
                    height={'100%'}
                    width={'100%'}
                    icon="vscode-icons:file-type-azure"
                  />
                </span>
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://kubernetes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon
                    height={'100%'}
                    width={'100%'}
                    icon="logos:kubernetes"
                  />
                </span>
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://cloud.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon
                    height={'100%'}
                    width={'100%'}
                    icon="logos:google-cloud"
                  />
                </span>
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://gitlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <Icon height={'100%'} width={'100%'} icon="logos:gitlab" />
              </div>
            </a>
            <a
              className="card-wrapper"
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card stack-item" data-can-click="false">
                <span className="lazy-image-wrapper">
                  <Icon
                    height={'100%'}
                    width={'100%'}
                    icon="logos:docker-icon"
                  />
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
