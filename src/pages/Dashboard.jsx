import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { getStoredReadList } from '../utlities/localStorage';

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#FF4560',
  '#A855F7',
];

export const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('/booksData.json')
      .then((res) => res.json())
      .then((allBooks) => {
        const storedReadIds = getStoredReadList();

        const readBooks = allBooks.filter((book) =>
          storedReadIds.includes(book.bookId)
        );

        const formattedData = readBooks.map((book) => ({
          name: book.bookName,
          uv: book.totalPages,
        }));

        setChartData(formattedData);
      });
  }, []);

  if (chartData.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-xl text-gray-500">
          No books in your Read List yet!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="name" />

            <YAxis />

            <Bar
              dataKey="uv"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;