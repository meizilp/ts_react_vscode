//引入CommentItem以及ICommentData
import {CommentItem, ICommentData} from "./CommentItem"
//commonjs风格的模块引入
import React = require('react')

/**
 * CommentList。评论列表组件，要求传入一个数组。
 */
class CommentList extends React.Component<{ data: ICommentData[] }, {}>{
    render() {
        //数组中的每个元素映射为一个评论条目组件
        let allComments = this.props.data.map((item) => {
            return (
                <CommentItem data={item} />
            )
        })
        //所有评论包含在一个div中返回
        return (
            <div>{allComments}</div>
        )
    }
}

export {CommentList}
