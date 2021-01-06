import React from "react";
export default function DashMainBoard() {
  return (
    <div className="myTabPanel">
      <div className="orderList fade-panel-enter-done">
        <div className="MuiPaper-root MuiTableContainer-root MuiPaper-elevation0 MuiPaper-rounded">
          <table className="MuiTable-root">
            <thead className="MuiTableHead-root">
              <tr className="MuiTableRow-root MuiTableRow-head">
                <th
                  className="MuiTableCell-root MuiTableCell-head"
                  scope="col"
                />
                <th
                  className="MuiTableCell-root MuiTableCell-head jss1312"
                  scope="col"
                >
                  <h3 className="MuiBox-root jss41">Order ID</h3>
                </th>
                <th className="MuiTableCell-root MuiTableCell-head" scope="col">
                  <h3 className="MuiBox-root jss41">Date</h3>
                </th>
              </tr>
            </thead>
            <tbody className="MuiTableBody-root">
              <tr className="MuiTableRow-root jss1315">
                <td className="MuiTableCell-root MuiTableCell-body jss1316">
                  <div className="MuiBox-root jss1318">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                    </svg>
                  </div>
                </td>
                <th
                  className="MuiTableCell-root MuiTableCell-body jss1316"
                  role="cell"
                  scope="row"
                >
                  <div className="MuiBox-root jss1319">
                    -MNf4f3SHq_TjQsmGDpV
                  </div>
                </th>
                <td className="MuiTableCell-root MuiTableCell-body jss1316">
                  <div className="MuiBox-root jss1320">
                    Fri, 04 Dec 2020 00:11:16 GMT
                  </div>
                </td>
              </tr>
              <tr className="MuiTableRow-root">
                <td
                  className="MuiTableCell-root MuiTableCell-body"
                  colSpan={3}
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                />
              </tr>
              <tr className="MuiTableRow-root jss1315">
                <td className="MuiTableCell-root MuiTableCell-body jss1316">
                  <div className="MuiBox-root jss1321">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                    </svg>
                  </div>
                </td>
                <th
                  className="MuiTableCell-root MuiTableCell-body jss1316"
                  role="cell"
                  scope="row"
                >
                  <div className="MuiBox-root jss1322">
                    -MNfDqhAo1W2JfLugVuJ
                  </div>
                </th>
                <td className="MuiTableCell-root MuiTableCell-body jss1316">
                  <div className="MuiBox-root jss1323">
                    Fri, 04 Dec 2020 00:51:22 GMT
                  </div>
                </td>
              </tr>
              <tr className="MuiTableRow-root">
                <td
                  className="MuiTableCell-root MuiTableCell-body"
                  colSpan={3}
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
