import React from "react";
import { Bar } from "react-chartjs-2";
import Box from "../components/box/Box";
import { BiTransfer, BiDollar } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { MdFingerprint } from "react-icons/md";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/dashboard-wrapper/DashboardWrapper";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../components/summary-box/SummaryBox";
import { colors, data } from "../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from "../components/overall-list/OverallList";
import RevenueList from "../components/revenue-list/RevenueList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Wallet = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row gap-6">
              <div className="col-5 col-md-5 col-sm-12 rounded-xl shadow-xl py-4 px-6 ml-0 md:ml-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div className="flex items-center text-2xl gap-3 justify-between my-4">
                  <h2 className="text-white tracking-wider">Nergigante</h2>
                  <GiMoneyStack className="text-white text-4xl" />
                </div>
                {/* email */}
                <div className="flex items-center text-2xl gap-3 justify-between my-4">
                  <MdFingerprint className="text-white text-5xl" />
                  <h2 className="text-white text-3xl font-semibold">
                    $100,302
                  </h2>
                </div>
                {/* amount and send */}
                <div className="text-xl text-[#ffffff5f] flex items-center gap-4">
                  <span>5384</span>
                  <span>6292</span>
                  <span>8893</span>
                  <span>0465</span>
                </div>
                <div className="my-3 text-sm text-[#ffffff5f] ">09/23</div>
              </div>
              <div className="col-5 col-md-6 col-sm-12 mb flex flex-col justify-center">
                <h2 className="text-xl text-gray">Welcome Back,</h2>
                <h1 className="text-5xl font-semibold">Nergigante!</h1>
              </div>
              <div className="col-5 col-md-5 col-sm-12 mb rounded-md shadow border py-4 px-6 ml-0 md:ml-4">
                <div className="flex items-center text-2xl gap-3 ">
                  <div className="p-2 bg-[#8624db] rounded-lg">
                    <BiTransfer className="text-white" />
                  </div>
                  <h2>Quick Transfer</h2>
                </div>
                {/* email */}
                <div className="border flex my-4 rounded-md divide-x-2 ">
                  <input
                    type="text"
                    placeholder="Recipient Email"
                    className="bg-transparent px-4 py-3 text-md w-full outline-none border-none"
                  />
                  <div className="text-center w-[100px]  py-2 px-4 leading-10 rounded-r-md text-[#008aff]">
                    Data
                  </div>
                </div>
                {/* amount and send */}
                <div className="flex items-center my-4 justify-between w-full">
                  {/* amount */}
                  <div className="flex border items-center rounded-md pl-2 w-1/2 gap-2">
                    <BiDollar className="text-2xl" />
                    <input
                      type="number"
                      placeholder="00.00"
                      className="bg-transparent py-2 text-xl w-full outline-none border-none "
                    />
                  </div>
                  <button className="w-1/4 py-2 px-4 bg-[#8624db] rounded-md text-white">
                    Send
                  </button>
                </div>
              </div>
              <div className="col-5 col-md-5 col-sm-12 mb rounded-md shadow border py-4 px-6">
                <div className="text-2xl ">
                  <h2>Exchange Rates</h2>
                </div>
                {/* email */}
                <div className="border flex my-4 rounded-md divide-x-2 ">
                  <input
                    type="text"
                    placeholder="Recipient Email"
                    className="bg-transparent px-4 py-3 text-md w-full outline-none border-none"
                  />
                  <div className="text-center w-[100px]  py-2 px-4 leading-10 rounded-r-md text-[#008aff]">
                    Data
                  </div>
                </div>
                {/* amount and send */}
                <div className="flex items-center my-4 justify-between w-full">
                  {/* amount */}
                  <div className="flex border items-center rounded-md pl-2 w-1/2 gap-2">
                    <BiDollar className="text-2xl" />
                    <input
                      type="number"
                      placeholder="00.00"
                      className="bg-transparent py-2 text-xl w-full outline-none border-none "
                    />
                  </div>
                  <button className="w-1/4 py-2 px-4 bg-[#8624db] hover:shadow-lg hover:scale-105 rounded-md text-white text-center">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              {/* <RevenueByMonthsChart /> */}
              <h2 className="text-2xl tracking-wider font-semibold">
                Transfer History
              </h2>
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">Overall</div>
        <div className="mb">
          <OverallList />
        </div>
        <div className="title mb">Revenue by channel</div>
        <div className="mb">
          <RevenueList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
};

export default Wallet;

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <>
      <div className="title mb">Revenue by months</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};
