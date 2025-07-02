import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource, greeting } from "../../portfolio";

export default function Projects() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
            user(login: "${openSource.githubUserName}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      description
                      url
                      forkCount
                      stargazers {
                        totalCount
                      }
                      createdAt
                      languages(first: 5) {
                        nodes {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setRepo(result.data.user.pinnedItems.edges);
      })
      .catch((error) => {
        console.error("GitHub API error:", error);
      });
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((edge) => (
          <GithubRepoCard key={edge.node.id} repo={edge.node} />
        ))}
      </div>
      <Button
        text="More Projects"
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
