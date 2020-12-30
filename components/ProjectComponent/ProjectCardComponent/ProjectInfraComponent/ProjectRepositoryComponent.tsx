import {
  faGitAlt,
  faGithub,
  faGitlab,
  faAws,
  faBitbucket,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function ProjectRepositoryComponent(props: { repoURL: string }) {
  type remoteTypes =
    | "github"
    | "gitlab"
    | "codecommit"
    | "bitbucket"
    | "remote repo"
    | "No repo"
    | "";

  const [remoteRepo, setRemoteRepo] = useState<remoteTypes>("");

  useEffect(() => {
    remoteRepoDetector();
  }, [props.repoURL]);

  function remoteRepoDetector() {
    const repoUrlString = props.repoURL;
    if (repoUrlString.match(/github/gi)) {
      setRemoteRepo("github");
    } else if (repoUrlString.match(/gitlab/gi)) {
      setRemoteRepo("gitlab");
    } else if (repoUrlString.match(/[codecommit]/gi)) {
      setRemoteRepo("codecommit");
    } else if (repoUrlString.match(/bitbucket/gi)) {
      setRemoteRepo("bitbucket");
    } else if (repoUrlString !== "") {
      setRemoteRepo("remote repo");
    } else {
      setRemoteRepo("No repo");
    }
  }

  function remoteIconDetector(): IconDefinition {
    switch (remoteRepo) {
      case "github":
        return faGithub;
      case "gitlab":
        return faGitlab;
      case "bitbucket":
        return faBitbucket;
      case "codecommit":
        return faAws;
      default:
        return faGitAlt;
    }
  }

  return (
    <div className="repo flex items-center">
      <div className="text-2xl font-sans text-gray-400 mx-1">
        <FontAwesomeIcon icon={remoteIconDetector()}></FontAwesomeIcon>
      </div>
      <div className="font-sans text-gray-400">{remoteRepo}</div>
    </div>
  );
}
