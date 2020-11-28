import React from "react";

export default function MeetingItem(props) {
  return (
    <li>SUBJECT: {props.item.subject}, ID: {props.item.id}</li>
  )
}