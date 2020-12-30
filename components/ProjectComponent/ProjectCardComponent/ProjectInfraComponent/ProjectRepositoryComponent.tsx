import {
  faGitAlt,
  faGithub,
  faGitlab,
  faAws,
  faBitbucket,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

export default function ProjectRepositoryComponent(props: { repoURL: string }) {
  type remoteTypes =
    | "github"
    | "gitlab"
    | "codecommit"
    | "bitbucket"
    | "remote repo";

  const remoteRepoRef = useRef<remoteTypes>();
  const remoteIconRef = useRef<IconDefinition>();

  useEffect(() => {
    remoteRepoDetector();
  }, [props.repoURL]);

  function remoteRepoDetector() {
    const repoUrlString = props.repoURL;
    if (repoUrlString.match(/github/gi)) {
      remoteRepoRef.current = "github";
    } else if (repoUrlString.match(/gitlab/gi)) {
      remoteRepoRef.current = "gitlab";
    } else if (repoUrlString.match(/[codecommit]/gi)) {
      remoteRepoRef.current = "codecommit";
    } else if (repoUrlString.match(/bitbucket/gi)) {
      remoteRepoRef.current = "bitbucket";
    } else {
      remoteRepoRef.current = "remote repo";
    }
  }

  function remoteIconDetector(): IconDefinition {
    switch (remoteRepoRef.current) {
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
      <div className="font-sans text-gray-400">{remoteRepoRef.current}</div>
    </div>
  );
}
