import {CommentItem, ICommentData} from "./commentItem"
import {CommentList} from "./CommentList"
import * as React from "react"

//利用webpack把json文件解析为变量
var fakeData = require("../mock/fakedata.json")

/**
 * CommentBox组件。此组件使用了状态对象。要求状态对象中包含一个data字段，提供评论数组。
 */
class CommentBox extends React.Component<{}, { data: ICommentData[] }> {
    constructor() {
        super()
        //数据使用从json中解析的变量
        this.state = { data: fakeData }
        
                
    }
    render() {
        return (
            <div>
                <h1>评论</h1>
                <CommentList data={this.state.data}/>
                <h1>评论输入区占位</h1>
            </div>
        )
    }

   
}

export {CommentBox}