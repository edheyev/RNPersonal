import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  FacebookIcon,
} from "react-share";
import { AiFillGithub } from "react-icons/ai";
import { SiProcessingfoundation } from "react-icons/si";

function SocMedBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EmailShareButton
        title={"email"}
        url={"edheyev@gmail.com"}
        hashtags={["hashtag1", "hashtag2"]}
        style={{ padding: 10 }}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton
        url={"https://www.facebook.com/big.green.owl/"}
        style={{ padding: 10 }}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton
        url={"https://www.linkedin.com/in/edward-heywood-everett-b8b50422a/"}
        style={{ padding: 10 }}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton
        title={"twitter"}
        url={"https://twitter.com/edheyev"}
        hashtags={["hashtag1", "hashtag2"]}
        style={{ padding: 10 }}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <a href="https://github.com/edheyev" style={{ padding: 10 }}>
        <AiFillGithub size={32} />
      </a>
      <a href="https://openprocessing.org/user/166638" style={{ padding: 10 }}>
        <SiProcessingfoundation size={32} />
      </a>
    </div>
  );
}

export default SocMedBar;
