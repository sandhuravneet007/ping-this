import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Pagination, Spin} from 'antd';
import ImageGridList from "./ImageGridList";

const Content = () => {
    const [loading, setLoading] = useState();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${pageSize}`)
            .then(res => {
                setLoading(false);
                setData(res.data);
            })
            .catch(error => {
                setLoading(false);
            });
    }, [page, pageSize]);

    const onPageChange = (page) => {
        setPage(page);
    }

    const onPageSizeChange = (current, pageSize) => {
        setPageSize(pageSize);
    }

    return (
        <>
            <Pagination
                size="small"
                defaultPageSize={pageSize || 10}
                showSizeChanger
                showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                }
                onChange={onPageChange}
                onShowSizeChange={onPageSizeChange}
                defaultCurrent={page || 1}
                total={100}
                onChange={(p, ps) => {
                    console.log('hey', p, ps);
                    setPage(p);
                    setPageSize(ps);
                }}
                style={{margin: 50, textAlign: "end"}}
            />
            {
                loading && (
                    <Spin spinning={loading} style={{width: 1000, height: 1000}}/>
                )
            }
            {
                !loading && (
                    <ImageGridList tileData={data} />
                )
            }
        </>
    );
};

export default Content;