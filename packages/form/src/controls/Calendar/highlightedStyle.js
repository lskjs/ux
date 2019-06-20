import { injectGlobal, css } from 'react-emotion';

export const highlightedStyle = css`
  background-color: rgba(215, 202, 50, 0.5) !important;
  border-radius: 2px;
  outline: 5px solid rgba(215, 202, 50, 0.5);
  &:hover {
    background: rgb(230, 230, 230) !important;
  }
  &:not(:focus) {
    color: black;
  }
`;

export const calendarStyles = () => injectGlobal`
  .react-calendar__tile--active {
    background: rgba(215, 202, 50, 0.5);
    color: black !important;
  }
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;

    &, & *, & *:before, & *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    button {
      margin: 0;
      border: 0;
      outline: none;

      &:enabled {
        &:hover {
          cursor: pointer;
        }
      }
    }

    &__navigation {
      height: 44px;
      margin-bottom: 1em;

      button {
        min-width: 44px;
        background: none;

        &:enabled {
          &:hover, &:focus {
            background-color: rgb(230, 230, 230);
          }
        }

        &[disabled] {
          background-color: rgb(240, 240, 240);
        }
      }
    }

    &__month-view {
      &__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: .75em;

        &__weekday {
          padding: .5em;
        }
      }

      &__weekNumbers {
        font-weight: bold;

        .react-calendar__tile {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .75em;
          padding: calc(.75em / .75) calc(.5em / .75);
        }
      }

      &__days {
        &__day {
          &--weekend {
            color: red !important;
          }

          &--neighboringMonth {
            color: rgb(150, 150, 150);
          }
        }
      }
    }

    &__year-view,
    &__decade-view,
    &__century-view {
      .react-calendar__tile {
        padding: 2em .5em;
      }
    }

    &__tile {
      max-width: 100%;
      text-align: center;
      padding: .75em .5em;
      background: none;

      &:disabled {
        background-color: rgb(240, 240, 240);
      }

      &:enabled {
        &:hover, &:focus {
          background-color: rgb(230, 230, 230);
        }
      }

      &--hasActive {
        @bgcolor: lighten(rgb(0, 110, 220), 30%);
        background: @bgcolor;

        &:enabled {
          &:hover, &:focus {
            background: lighten(@bgcolor, 10%);
          }
        }
      }

      &--active {
        @bgcolor: rgb(0, 110, 220);
        background: #d4e0de !important;
        color: white !important;

        &:enabled {
          &:hover, &:focus {
            background: lighten(@bgcolor, 10%);
          }
        }
      }
    }

    &--selectRange {
      .react-calendar__tile {
        &--hover {
          background-color: rgb(230, 230, 230);
        }
      }
    }
  }
`;
