
// import ReactMarkdown from "react-markdown"
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipeAi(props) {
  return(
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Mr. Chef Recommends:</h2>
      <ReactMarkdown>
        {props.recipe}
      </ReactMarkdown>
    </section>
  )
}
