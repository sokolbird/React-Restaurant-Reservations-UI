import React from "react";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import tableData from "../tableData";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../styles/check.css";

function Check(props) {
  return (
    <div className="check-table">
      <div className="form-header">
        Пожалуйста, проверьте правильность введенных Вами данных
      </div>
      <Paper style={{ maxHeight: "60vh", overflowY: "auto" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>
                <b>
                  {format(props.selectedDate, "dd MMMM YYYY", {
                    locale: ruLocale
                  })}
                </b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Время</TableCell>
              <TableCell>
                <b>{format(props.selectedTime, "HH:mm")}</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Информация о выбранном столе</TableCell>
              <TableCell>
                <div>
                  Номер стола:{" "}
                  <b>
                    {props.selectedTable ? props.selectedTable : "не выбран"}
                  </b>
                </div>
                <div>
                  Макс. кол-во персон:
                  <b>
                    {tableData.find(
                      table => table.id === props.selectedTable
                    ) !== undefined
                      ? " " +
                        tableData.find(
                          table => table.id === props.selectedTable
                        ).persons
                      : " не выбрано"}
                  </b>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ваши имя и фамилия</TableCell>
              <TableCell>
                <b> {props.name + " " + props.surname} </b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Контактный телефон</TableCell>
              <TableCell>
                <b> {props.tel} </b>
              </TableCell>
            </TableRow>
            {props.email ? (
              <TableRow>
                <TableCell>Электронный адрес</TableCell>
                <TableCell>
                  <b> {props.email} </b>
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Check;
