import Post from "./post";
import React from "react";

export default function DevPosts() {
  const item1 = {
    name: "API?🤔(Application Programming Interface)",
    channel: "LinkedIn",
    iframeSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7127432892401512449?compact=1",
  };

  const item2 = {
    name: "Looking for new career opportunities!🤩",
    channel: "LinkedIn",
    iframeSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7125487522616356867?compact=1",
  };

  const item3 = {
    name: "3 key advantages about PL/SQL 'Procedural Language' ",
    channel: "LinkedIn",
    iframeSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7113252570902528000?compact=1",
  };
  return (
    <div className="grid grid-cols-3 gap-1">
      <a
        href="https://www.linkedin.com/posts/anajoselynalarcon_apis-innovation-dataaccess-activity-7127433098081771520-LVdL?utm_source=share&utm_medium=member_desktop"
        target="_blank"
        rel="noopener noreferrer">
        <Post
          name={item1.name}
          channel={item1.channel}
          iframeSrc={item1.iframeSrc}
        />
      </a>
      <a
        href="https://www.linkedin.com/posts/anajoselynalarcon_problemsolver-softwaredeveloper-dataenthusiast-activity-7125487556791537664-oo8o?utm_source=share&utm_medium=member_desktop"
        rel="noopener noreferrer">
        <Post
          name={item2.name}
          channel={item2.channel}
          iframeSrc={item2.iframeSrc}
        />
      </a>
      <a
        href="https://www.linkedin.com/posts/anajoselynalarcon_part2-pl-databases-activity-7113252597557313536-a2Kb?utm_source=share&utm_medium=member_desktop"
        rel="noopener noreferrer">
        <Post
          name={item3.name}
          channel={item3.channel}
          iframeSrc={item3.iframeSrc}
        />
      </a>
    </div>
  );
}
