                    import { Table } from 'antd';
                    <Table
                        className={css.table}
                        columns={columns}
                        dataSource={list}
                        pagination={false}
                        scroll={{ y: list && list.length > 5 ? 180 : false }}
                        expandedRowRender={this.expandedRowRender}
                        /*手动实现动态处理expandIcon//有助于理解原理，不推荐
                        rowKey="xxxx"
                        expandedRowKeys={this.state.expandedRowKeys}
                        //onClick事件代码
                        let currentKey = props.record.xxxx;
                        if (!props.expanded && !expandedRowKeys.includes(currentKey)) {//保证不重复加入
                        this.setState({
                        expandedRowKeys: expandedRowKeys.concat([currentKey])
                        })
                        } else {
                        expandedRowKeys.splice(expandedRowKeys.indexOf(currentKey),1);//返回的是含有被删除的元素的数组
                        this.setState({
                               expandedRowKeys 
                        })
                         }*/
                        // expandRowByClick//不建议使用有bug，没有图标也可以点
                        //----------以下是使用官方api实现，推荐使用此代码
                        expandIcon={(props)=>{
                            return (xxx?null:
                                (<div role="button" tabindex="0" class={props.expanded?"ant-table-row-expand-icon ant-table-row-expanded"
                                :'ant-table-row-expand-icon ant-table-row-collapsed'}  onClick={(e)=>{ props.onExpand(props.record, e);}}/>)
                            
                            )}}
                    />
