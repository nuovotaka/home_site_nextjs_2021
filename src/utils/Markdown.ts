// TODO: @mapbox/rehype-prism does not have typescript definition
// @ts-ignore
import highlightjs from 'highlight.js';
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

marked.setOptions({
  highlight(code, lang) {
    return highlightjs.highlightAuto(code, [lang]).value;
  }, // シンタックスハイライトに使用する関数の設定
  pedantic: false, // trueの場合はmarkdown.plに準拠する gfmを使用する場合はfalseで大丈夫
  gfm: true, // GitHub Flavored Markdownを使用
  breaks: true, // falseにすると改行入力は末尾の半角スペース2つになる
  sanitize: false, // trueにすると特殊文字をエスケープする
  silent: false, // trueにするとパースに失敗してもExceptionを投げなくなる
});

export async function markdownToHtml(markdown: string) {
  const result = await marked(markdown);
  const clean = await sanitizeHtml(result, {
    allowedTags: [
      'address',
      'article',
      'aside',
      'footer',
      'header',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hgroup',
      'main',
      'nav',
      'section',
      'blockquote',
      'dd',
      'div',
      'dl',
      'dt',
      'figcaption',
      'figure',
      'hr',
      'li',
      'main',
      'ol',
      'p',
      'pre',
      'ul',
      'a',
      'abbr',
      'b',
      'bdi',
      'bdo',
      'br',
      'cite',
      'code',
      'data',
      'dfn',
      'em',
      'i',
      'kbd',
      'mark',
      'q',
      'rb',
      'rp',
      'rt',
      'rtc',
      'ruby',
      's',
      'samp',
      'small',
      'span',
      'strong',
      'sub',
      'sup',
      'time',
      'u',
      'var',
      'wbr',
      'caption',
      'col',
      'colgroup',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'tr',
      'img',
    ],
    disallowedTagsMode: 'discard',
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      // We don't currently allow img itself by default, but this
      // would make sense if we did. You could add srcset here,
      // and if you do the URL is checked for safety
      img: ['src'],
    },
    // Lots of these won't come up by default because we don't allow them
    selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
    // URL schemes we permit
    allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel'],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
    allowedIframeHostnames: ['www.youtube.com'],
  });
  return clean.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || '');
}
