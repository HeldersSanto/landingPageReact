import './textStyle.scss';

export function ThirdSectionTexts(props) {
  return (
    <div className="ThirdSectionText">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.content}</p>
    </div>
  )
}