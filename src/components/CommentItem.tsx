// 引用react
import * as React from "react"

/**
 * 评论数据结构定义
 */
interface ICommentData {
    author: string,
    text: string
}

/**
 * CommentItem 评论组件。有一个data属性，要求传入一个对象。
 */
class CommentItem extends React.Component<{data:ICommentData}, {}>{
    render() {
        return (
            <div>
                <h2 className='author'>作者：{this.props.data.author}</h2>
                <span className='content'>内容：{this.props.data.text}</span>
            </div>
        )
    }
}

export {CommentItem, ICommentData}
