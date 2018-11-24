import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";

export const materialTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#4DB6AC'
        },
    },

    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#4DB6AC',
            },
        },
        MuiPickersDay: {
            day: {
                color: '#4DB6AC',
            },
            selected: {
                backgroundColor: '#d8b038',
            },
            current: {
                color: '#e3e3db',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#d8b038',
            },
        }
    },
});