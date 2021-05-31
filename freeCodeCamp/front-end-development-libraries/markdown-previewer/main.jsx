marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: placeholder
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="split-window editor-window">
                    <div className="editor-title">
                        <p><strong>Editor</strong></p>
                    </div>
                    <textarea
                      id="editor"
                      type="text"
                      value={this.state.userInput}
                      onChange={this.handleChange}
                    ></textarea>
                </div>
                <div className="split-window previewer-window">
                    <p className="previewer-title"><strong>Previewer</strong></p>
                    <div id="preview"
                         dangerouslySetInnerHTML={{__html: marked(this.state.userInput.toString(), { renderer: renderer })}}
                    >
                    </div>
                </div>
            </div>
        );
    }
}
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const target = document.querySelector('#app');
ReactDOM.render(<MarkdownPreviewer />, target);

////////////////////////////////////////////////////////////
