import { createSignal } from "solid-js";

export default function Message(props:any) {
    const words = [
        {
            "word": "test"
        },
    ]
    const modNum = props.num % words.length
  return (words[modNum].word);
}
