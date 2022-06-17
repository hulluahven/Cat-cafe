// /* .star-list {
//   position: relative;
//   display: flex;
//   padding-right: 90px;
//   padding-left: 09px;
//   padding-top: 100px;
//   padding-bottom: 80px;
//   background-color: #ffeead;
//   background-position: left bottom;
//   background-size: 449px 304px;
//   background-repeat: no-repeat;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;
//   box-sizing: border-box;
//   background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQ5IiBoZWlnaHQ9IjMwNCIgdmlld0JveD0iMCAwIDQ0OSAzMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIyLjEyNCA2MTMuOTU0QzU2Ljc2ODggNjIzLjQ1NiAxLjU4MzM1IDU2Ni4yMzMgLTQ4LjU0MTUgNTIzLjIyOUMtOTUuMDA5MSA0ODMuMzYyIC0xMjkuNzE5IDQzNC4zMjMgLTE1My4xNzMgMzc3Ljc2NUMtMTc4LjQ2NyAzMTYuNzcgLTIxNC4wOTEgMjQ4LjE1OSAtMTg3LjcxIDE4Ny42MjdDLTE2MS41MTMgMTI3LjUxOCAtODEuNzA3NyAxMTguODgzIC0yNS41NzcyIDg0Ljk5NkMyNC4xODc3IDU0Ljk1MjMgNjQuNDM4NyAtNi41OTY2NSAxMjIuMTI0IDAuNTc2NzU0QzE3OS45OTkgNy43NzM4NCAyMDAuMTIgODEuODY0NyAyNDUuMzQ5IDExOC42ODdDMjg2Ljc0MSAxNTIuMzg2IDM0My41NiAxNjIuODkgMzc0LjcyMyAyMDYuMjI1QzQxNC4xOTYgMjYxLjExOCA0NjguMzIxIDMyOS45NjMgNDQyLjA5IDM5Mi4yOEM0MTUuNDEgNDU1LjY2MSAzMTYuNzAzIDQzOS4xOCAyNjAuMTc5IDQ3OC4zNDFDMjA1LjgyNSA1MTUuOTk3IDE4Ny41NTggNjA0LjQ0IDEyMi4xMjQgNjEzLjk1NFoiIGZpbGw9IiNGRkY2RDkiPjwvcGF0aD4KPC9zdmc+");
// }

// .star-list::before {
//   position: absolute;
//   top: 36px;
//   left: 0;
//   width: 213px;
//   height: 170px;
//   content: "";
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAzIiBoZWlnaHQ9IjE1OSIgdmlld0JveD0iMCAwIDIwMyAxNTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNzEuNzAxIDI3LjE1NjhDMTcyLjQ0NyAyNS44MDA4IDE3OC4zNCAyMi4yMDg0IDE4MC44NiAyMS44MzQyQzE4MC4yNjYgMjcuMzI3IDE3Ni40MzggMzEuNDA2NiAxNzYuNDM4IDMxLjQwNjZDMTczLjAyMSAyOS42Mjg2IDE3MS43MDEgMjcuMTU2OCAxNzEuNzAxIDI3LjE1NjhaIiBmaWxsPSIjQUQ1RjFGIj48L3BhdGg+CjxwYXRoIGQ9Ik0xODcuMDM2IDcyLjg4OUMxODguNTc1IDczLjA4MTYgMTk0LjA3NCA3Ny4yNDAxIDE5NS4zNDEgNzkuNDQ2NEMxOTAuMDA0IDgwLjkwODcgMTg0LjgwNiA3OC44NDcyIDE4NC44MDYgNzguODQ3MkMxODUuMjIxIDc1LjAxODEgMTg3LjAzNiA3Mi44ODkgMTg3LjAzNiA3Mi44ODlaIiBmaWxsPSIjQUQ1RjFGIj48L3BhdGg+CjxwYXRoIGQ9Ik0xNjEuNzggMTAzLjM3NkMxNjIuOTE1IDEwNC40MTUgMTY0Ljk3NSAxMTAuOTk4IDE2NC43MjUgMTEzLjUzM0MxNTkuNTMxIDExMS42MzIgMTU2LjQ5NCAxMDYuOTQgMTU2LjQ5NCAxMDYuOTRDMTU5LjA2MyAxMDQuMDU1IDE2MS43OCAxMDMuMzc2IDE2MS43OCAxMDMuMzc2WiIgZmlsbD0iI0FENUYxRiI+PC9wYXRoPgo8cGF0aCBkPSJNMTM0LjA0OSAxOC4wMjY5QzEzNS4yMjIgMTQuNjA0OCAxNDAuMjI1IDkuMzEyNDQgMTQwLjIyNSA5LjMxMjQ0QzE0MC45OTcgMTMuMDYwNyAxNDAuODgzIDE2LjkzNzggMTM5Ljg5MiAyMC42MzZDMTM0LjA0MSAxOS43NjU3IDEzNC4wNDkgMTguMDI2OSAxMzQuMDQ5IDE4LjAyNjlaIiBmaWxsPSIjQUQ1RjFGIj48L3BhdGg+CjxwYXRoIGQ9Ik0xMzcuMTQ1IDEwMi4xODhDMTM5LjU0NiAxMDUuMjY2IDE0Mi45MTkgMTA3LjQ0MyAxNDYuNzE3IDEwOC4zNjZDMTUwLjUxNCAxMDkuMjg5IDE1NC41MTQgMTA4LjkwNSAxNTguMDY4IDEwNy4yNzVDMTYxLjYyMiAxMDUuNjQ1IDE2NC41MjEgMTAyLjg2NSAxNjYuMjk2IDk5LjM4NThDMTY4LjA3MSA5NS45MDY3IDE2OC42MTggOTEuOTMyMSAxNjcuODQ4IDg4LjEwNjRDMTcyLjE1NyA4OC42OTk3IDE3Ni41MzQgODcuNjcwNiAxODAuMTI3IDg1LjIxOTNDMTgzLjcyMSA4Mi43NjggMTg2LjI3MyA3OS4wNzAxIDE4Ny4yODcgNzQuODQ1N0MxODguMzAxIDcwLjYyMTMgMTg3LjcwNCA2Ni4xNzI5IDE4NS42MTIgNjIuMzY2N0MxODMuNTIxIDU4LjU2MDYgMTgwLjA4NSA1NS42NjkyIDE3NS45NzMgNTQuMjU1N0MxNzkuMDI3IDUwLjY3OCAxODAuNjIxIDQ2LjA4NDcgMTgwLjQzOCA0MS4zODk4QzE4MC4yNTUgMzYuNjk0OSAxNzguMzA4IDMyLjI0MjUgMTc0Ljk4NSAyOC45MTg2QzE3MS42NjIgMjUuNTk0NiAxNjcuMjA2IDIzLjY0MjcgMTYyLjUwNCAyMy40NTEzQzE1Ny44MDEgMjMuMjU5OSAxNTMuMTk3IDI0Ljg0MjkgMTQ5LjYwOCAyNy44ODU1QzE0OC4yOTUgMjQuNDU0IDE0NS44NjEgMjEuNTY1OSAxNDIuNyAxOS42ODc5QzEzOS41MzggMTcuODA5OCAxMzUuODMzIDE3LjA1MTYgMTMyLjE4NSAxNy41MzU3QzEyOC41MzYgMTguMDE5OCAxMjUuMTU2IDE5LjcxNzkgMTIyLjU5MSAyMi4zNTU3QzEyMC4wMjYgMjQuOTkzNSAxMTguNDI3IDI4LjQxNjggMTE4LjA1IDMyLjA3MjNDMTE1LjQyOSAzOC4wMDkgMTEzLjA0NSAzNy42OTYxIDk2Ljk0MTggMzkuNzQxOUM2OS44NDUyIDQzLjE4NzcgNy41MTEzNyA1Mi4xNjY0IC0yOS41MTQxIDYwLjc0NTlMLTcuOTEyODMgMTQxLjM2M0M2My4wMDYyIDExOS4zNDEgMTI0LjE3NyA5Mi4yNDAzIDEyOS4wNDMgOTEuNTg0M0MxMzIuNjY5IDkxLjEwNDYgMTMyLjA2OCA5Ni40Njc4IDEzNy4xNDUgMTAyLjE4OFoiIGZpbGw9IiNGMkFFNzIiPjwvcGF0aD4KPHBhdGggZD0iTTEzNy4xNDUgMTAyLjE4OEMxMzkuNTQ2IDEwNS4yNjYgMTQyLjkxOSAxMDcuNDQzIDE0Ni43MTcgMTA4LjM2NkMxNTAuNTE0IDEwOS4yODkgMTU0LjUxNCAxMDguOTA1IDE1OC4wNjggMTA3LjI3NUMxNjEuNjIyIDEwNS42NDUgMTY0LjUyMSAxMDIuODY1IDE2Ni4yOTYgOTkuMzg1OEMxNjguMDcxIDk1LjkwNjYgMTY4LjYxOCA5MS45MzIxIDE2Ny44NDggODguMTA2M0MxNzIuMTU3IDg4LjY5OTcgMTc2LjUzNCA4Ny42NzA1IDE4MC4xMjcgODUuMjE5MkMxODMuNzIxIDgyLjc2NzkgMTg2LjI3MyA3OS4wNyAxODcuMjg3IDc0Ljg0NTZDMTg4LjMwMSA3MC42MjEzIDE4Ny43MDQgNjYuMTcyOCAxODUuNjEyIDYyLjM2NjdDMTgzLjUyMSA1OC41NjA1IDE4MC4wODUgNTUuNjY5MiAxNzUuOTczIDU0LjI1NTZDMTc5LjAyNyA1MC42Nzc5IDE4MC42MjEgNDYuMDg0NiAxODAuNDM4IDQxLjM4OTdDMTgwLjI1NSAzNi42OTQ4IDE3OC4zMDggMzIuMjQyNSAxNzQuOTg1IDI4LjkxODVDMTcxLjY2MiAyNS41OTQ2IDE2Ny4yMDYgMjMuNjQyNyAxNjIuNTA0IDIzLjQ1MTNDMTU3LjgwMSAyMy4yNTk4IDE1My4xOTcgMjQuODQyOSAxNDkuNjA4IDI3Ljg4NTRDMTQ4LjI5NSAyNC40NTQgMTQ1Ljg2MSAyMS41NjU5IDE0Mi43IDE5LjY4NzhDMTM5LjUzOCAxNy44MDk4IDEzNS44MzQgMTcuMDUxNSAxMzIuMTg1IDE3LjUzNTZDMTI4LjUzNiAxOC4wMTk3IDEyNS4xNTYgMTkuNzE3OSAxMjIuNTkxIDIyLjM1NTdDMTIwLjAyNiAyNC45OTM1IDExOC40MjcgMjguNDE2NyAxMTguMDUgMzIuMDcyM0MxMTUuNDI5IDM4LjAwODkgMTEzLjA0NSAzNy42OTYxIDk2Ljk0MTkgMzkuNzQxOEM4OS40OTI1IDQwLjY4OTQgNzkuMzczMyA0Mi4wNTY3IDY3Ljg0MSA0My43MTkzQzYzLjE2MDkgNjkuNTQ3MiA3NS43NzQ1IDk2LjA4NTYgODMuNDEwNyAxMDkuMjA0QzEwOS4yNDYgOTkuMjExNiAxMjYuNTQ4IDkxLjkxOTYgMTI5LjA0MyA5MS41ODQyQzEzMi42NyA5MS4xMDQ2IDEzMi4wNjggOTYuNDY3NyAxMzcuMTQ1IDEwMi4xODhaIiBmaWxsPSIjRjRFOUUzIj48L3BhdGg+CjxwYXRoIGQ9Ik0xNTEuMTY3IDU3LjU0NzJDMTUzLjc4NCA2Ny4zMTE4IDE0MC44NTcgNzkuNzY1IDEzNi4xNzggNzYuODU3M0MxMjkuMjI0IDcyLjUzNzUgMTM0LjQwOSA2OC43NDUgMTMyLjkzMyA2My4yMzdDMTMxLjQ1NyA1Ny43Mjg5IDEyNS4wMzggNTUuMjE0NyAxMjcuNjk2IDQ5LjIxMTlDMTMwLjQ3IDQyLjk2ODQgMTQ4LjY4NSA0OC4yODQzIDE1MS4xNjcgNTcuNTQ3MloiIGZpbGw9IiNGMjlFNTciPjwvcGF0aD4KPHBhdGggZD0iTTEzNi4yNjkgMzUuNTEwOUMxMzUuNjIzIDM1LjY4NCAxMzQuOTQgMzUuNjYyIDEzNC4zMDcgMzUuNDQ3N0MxMzMuNjc0IDM1LjIzMzQgMTMzLjExOSAzNC44MzYzIDEzMi43MTIgMzQuMzA2OEMxMzIuMzA1IDMzLjc3NzIgMTMyLjA2NCAzMy4xMzg5IDEzMi4wMjEgMzIuNDcyNkMxMzEuOTc3IDMxLjgwNjMgMTMyLjEzMyAzMS4xNDIgMTMyLjQ2OCAzMC41NjM1QzEzMi44MDIgMjkuOTg1MSAxMzMuMzAxIDI5LjUxODUgMTMzLjkwMSAyOS4yMjI5QzEzNC41MDEgMjguOTI3MyAxMzUuMTc1IDI4LjgxNTkgMTM1LjgzOSAyOC45MDI3QzEzNi41MDIgMjguOTg5NiAxMzcuMTI0IDI5LjI3MDggMTM3LjYyNiAyOS43MTA4QzEzOC4xMjkgMzAuMTUwOCAxMzguNDkgMzAuNzI5OSAxMzguNjYyIDMxLjM3NDhDMTM4Ljg5NCAzMi4yMzk2IDEzOC43NzIgMzMuMTYxMiAxMzguMzIzIDMzLjkzNjlDMTM3Ljg3NSAzNC43MTI1IDEzNy4xMzYgMzUuMjc4NyAxMzYuMjY5IDM1LjUxMDlaIiBmaWxsPSIjRjI5RTU3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xNjAuODYzIDQ3LjIyMDRDMTYwLjIxNiA0Ny4zOTM1IDE1OS41MzQgNDcuMzcxNSAxNTguOSA0Ny4xNTcyQzE1OC4yNjcgNDYuOTQyOCAxNTcuNzEyIDQ2LjU0NTggMTU3LjMwNSA0Ni4wMTYyQzE1Ni44OTggNDUuNDg2NyAxNTYuNjU4IDQ0Ljg0ODQgMTU2LjYxNCA0NC4xODIxQzE1Ni41NzEgNDMuNTE1OCAxNTYuNzI2IDQyLjg1MTQgMTU3LjA2MSA0Mi4yNzNDMTU3LjM5NiA0MS42OTQ1IDE1Ny44OTUgNDEuMjI4IDE1OC40OTUgNDAuOTMyNEMxNTkuMDk1IDQwLjYzNjggMTU5Ljc2OSA0MC41MjUzIDE2MC40MzIgNDAuNjEyMkMxNjEuMDk1IDQwLjY5OSAxNjEuNzE3IDQwLjk4MDIgMTYyLjIyIDQxLjQyMDNDMTYyLjcyMyA0MS44NjAzIDE2My4wODMgNDIuNDM5NCAxNjMuMjU2IDQzLjA4NDNDMTYzLjQ4OCA0My45NDkxIDE2My4zNjYgNDQuODcwNyAxNjIuOTE3IDQ1LjY0NjNDMTYyLjQ2OCA0Ni40MjIgMTYxLjcyOSA0Ni45ODgyIDE2MC44NjMgNDcuMjIwNFoiIGZpbGw9IiNGMjlFNTciPjwvcGF0aD4KPHBhdGggZD0iTTE2Ny41MDUgNzQuNDYxQzE2Ni44NTggNzQuNjM0MiAxNjYuMTc2IDc0LjYxMjIgMTY1LjU0MiA3NC4zOTc4QzE2NC45MDkgNzQuMTgzNSAxNjQuMzU0IDczLjc4NjQgMTYzLjk0NyA3My4yNTY5QzE2My41NCA3Mi43MjczIDE2My4zIDcyLjA4OSAxNjMuMjU2IDcxLjQyMjhDMTYzLjIxMyA3MC43NTY1IDE2My4zNjggNzAuMDkyMSAxNjMuNzAzIDY5LjUxMzdDMTY0LjAzOCA2OC45MzUyIDE2NC41MzcgNjguNDY4NyAxNjUuMTM3IDY4LjE3MzFDMTY1LjczNyA2Ny44Nzc0IDE2Ni40MTEgNjcuNzY2IDE2Ny4wNzQgNjcuODUyOUMxNjcuNzM3IDY3LjkzOTcgMTY4LjM1OSA2OC4yMjA5IDE2OC44NjIgNjguNjYwOUMxNjkuMzY0IDY5LjEwMSAxNjkuNzI1IDY5LjY4MDEgMTY5Ljg5OCA3MC4zMjVDMTcwLjEzIDcxLjE4OTggMTcwLjAwOCA3Mi4xMTE0IDE2OS41NTkgNzIuODg3QzE2OS4xMSA3My42NjI3IDE2OC4zNzEgNzQuMjI4OSAxNjcuNTA1IDc0LjQ2MVoiIGZpbGw9IiNGMjlFNTciPjwvcGF0aD4KPHBhdGggZD0iTTE0OS43NDkgOTQuNzg0QzE0OS4xMDMgOTQuOTU3MSAxNDguNDIgOTQuOTM1MSAxNDcuNzg3IDk0LjcyMDhDMTQ3LjE1MyA5NC41MDY1IDE0Ni41OTggOTQuMTA5NCAxNDYuMTkxIDkzLjU3OThDMTQ1Ljc4NCA5My4wNTAzIDE0NS41NDQgOTIuNDEyIDE0NS41MDEgOTEuNzQ1N0MxNDUuNDU3IDkxLjA3OTQgMTQ1LjYxMyA5MC40MTUgMTQ1Ljk0NyA4OS44MzY2QzE0Ni4yODIgODkuMjU4MSAxNDYuNzgxIDg4Ljc5MTYgMTQ3LjM4MSA4OC40OTZDMTQ3Ljk4MSA4OC4yMDA0IDE0OC42NTUgODguMDg5IDE0OS4zMTggODguMTc1OEMxNDkuOTgxIDg4LjI2MjYgMTUwLjYwMyA4OC41NDM5IDE1MS4xMDYgODguOTgzOUMxNTEuNjA5IDg5LjQyMzkgMTUxLjk2OSA5MC4wMDMgMTUyLjE0MiA5MC42NDc5QzE1Mi4zNzQgOTEuNTEyNyAxNTIuMjUyIDkyLjQzNDMgMTUxLjgwMyA5My4yMUMxNTEuMzU0IDkzLjk4NTYgMTUwLjYxNSA5NC41NTE4IDE0OS43NDkgOTQuNzg0WiIgZmlsbD0iI0YyOUU1NyI+PC9wYXRoPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bXVsdGlwbHkiPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bXVsdGlwbHkiPgo8cGF0aCBkPSJNMTEzLjE2MyA2Ny4wNzcyQzExMi4zODIgNjQuMjM2OSAxMTIuMDU4IDYxLjI5MDIgMTEyLjIwMyA1OC4zNDc1QzExMi4yMjEgNTguMDM4NyAxMTIuMzYyIDU3Ljc0OTkgMTEyLjU5NCA1Ny41NDQ2QzExMi44MjYgNTcuMzM5MyAxMTMuMTMgNTcuMjM0MyAxMTMuNDM5IDU3LjI1MjdDMTEzLjc0OCA1Ny4yNzEgMTE0LjAzOCA1Ny40MTEzIDExNC4yNDMgNTcuNjQyNkMxMTQuNDQ4IDU3Ljg3MzkgMTE0LjU1MyA1OC4xNzczIDExNC41MzUgNTguNDg2MUMxMTQuMjMgNjMuNTMwNCAxMTUuODU3IDY5LjU5MjEgMTE4LjY3MyA3My45MzE4QzExOC44NDIgNzQuMTkxNCAxMTguOSA3NC41MDczIDExOC44MzUgNzQuODEwMUMxMTguNzcgNzUuMTEyOCAxMTguNTg4IDc1LjM3NzUgMTE4LjMyNyA3NS41NDZDMTE4LjA2NyA3NS43MTQ1IDExNy43NTEgNzUuNzcyOSAxMTcuNDQ4IDc1LjcwODVDMTE3LjE0NCA3NS42NDQgMTE2Ljg3OSA3NS40NjE5IDExNi43MTEgNzUuMjAyM0MxMTUuMTE0IDcyLjY5MzggMTEzLjkxNyA2OS45NTI4IDExMy4xNjMgNjcuMDc3MloiIGZpbGw9IiNGMkFFNzIiPjwvcGF0aD4KPC9nPgo8L2c+Cjwvc3ZnPg==");
// }

// .star-list::after {
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 111px;
//   height: 158px;
//   content: "";
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTExIiBoZWlnaHQ9IjE1OCIgdmlld0JveD0iMCAwIDExMSAxNTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02Mi42MDI1IDEwNS45MjZDODYuNjU2IDEyMi4wNTcgMTIzLjI4OCAxMzkuNjc1IDEyNi41OSAxMzMuNTYyQzEyOS44OTIgMTI3LjQ0OSAxMTQuMzcgMTEwLjEwMSA5My4xMjU3IDg5LjM0MUM3MC43NTAzIDY3LjQ1OCA1NS4wMjU1IDYxLjI1OTcgNDcuMjE2NCA2My42MTk1QzM0LjU3MzIgNjcuNDgyNSAzOC41NjAyIDg5LjgzNjkgNjIuNjAyNSAxMDUuOTI2WiIgZmlsbD0iI0Q0Qzk2MiI+PC9wYXRoPgo8cGF0aCBkPSJNOTUuNzUyMSA2MS43Njg2QzExNi40NDQgOTAuOTM0OCAxMzUuMzkxIDEzOS43NzMgMTI3LjU0NCAxNDMuMjEyQzExOS45NiAxNDYuNTIyIDEwNi43MTggMTI0LjUwOSA3OC41NTIxIDk2LjU3MjhDNTEuMDYyOSA2OS4zOTEyIDE5LjE2ODMgMzMuNDA5IDIyLjU2NjEgMjMuOTQzNEMyOS4wODI3IDUuOTYzMzYgNjYuOTkyMyAyMS4yNjMgOTUuNzUyMSA2MS43Njg2WiIgZmlsbD0iI0Q0Qzk2MiI+PC9wYXRoPgo8cGF0aCBkPSJNMTI4LjAzMSAxNDEuMjExTDEyNy43MTkgMTQwLjA0N0MxMjcuNjI2IDEzOS43IDEyNy41MzcgMTM5LjM2OCAxMjcuNDQ4IDEzOS4wMzVDMTI3LjI2NiAxMzguMzU2IDEyNi45MzggMTM3LjY4NiAxMjYuNjgyIDEzNy4xMTZDMTIyLjc5OSAxMjguMTYxIDExNC41ODggMTIxLjA0OSAxMDYuMjcxIDExNi4zMTFDOTMuMTI2NiAxMDguNzIzIDc4LjU3MzUgMTAzLjk2NCA2My45Mzk3IDEwMC4xNzZDNTYuNzE4OCA5OC4zMDg5IDQ5LjQxOCA5Ni42NDExIDQyLjE1MzIgOTUuMDUyN0MzNi4wOTU0IDkzLjcwNTQgMjkuNDQ0OCA5MS4wMzE2IDIzLjI0NjEgOTEuODE2MkMxNy4wNDc0IDkyLjYwMDkgMTguOTc4OSA5OS4wMzQ0IDIyLjA1NjQgMTAxLjkzOEM0OS45OTI5IDEyOC4yNDIgOTMuNTgyOCAxMTYuMjk1IDEyMC4wMzEgMTQzLjM1NEMxMjAuNzkxIDE0NC4xNDYgMTIzLjYxNyAxNDQuNzI1IDEyNC42NDkgMTQ1LjA4N0MxMjcuMjM4IDE0Ni4wNTcgMTI4LjY0MiAxNDMuMzc5IDEyOC4wMzEgMTQxLjIxMVoiIGZpbGw9IiNGNkRGOEEiPjwvcGF0aD4KPC9zdmc+");
// }

// .star-list__list {
//   margin: 0;
//   padding: 0;
//   margin-top: 44px;
//   margin-bottom: 44px;
//   margin-left: -20px;
//   font-size: 0;
//   line-height: 0;
//   text-align: center;
// }

// .star-list__item {
//   display: inline-block;
//   margin-left: 20px;
//   margin-top: 20px;
//   font-size: 18px;
//   line-height: 27px;
//   vertical-align: top;
//   text-align: left;
//   overflow: hidden;
// } */

// import styled from "styled-components";
// import { Li, Section, Ul } from "/src/components/styley";
// // import starsImage from "/src/assets/stars-image.svg";
// // import startLeft from "/src/assets/stars-left.svg";
// // import startRight from "/src/assets/stars-right.svg";

// export const StyledStarsList = styled(Section)`
//   position: relative;
//   display: flex;
//   padding-right: ${(props) => props.theme.pagePadding};
//   padding-left: ${(props) => props.theme.pagePadding};
//   padding-top: 100px;
//   padding-bottom: 80px;
//   background-color: ${(props) => props.theme.colorForDarkBackground};
//   background-image: url(${starsImage});
//   background-position: left bottom;
//   background-size: 449px 304px;
//   background-repeat: no-repeat;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;

//   &::before {
//     position: absolute;
//     top: 36px;
//     left: 0;
//     width: 213px;
//     height: 170px;
//     content: "";
//     background-image: url(${startLeft});
//     background-size: contain;
//     background-repeat: no-repeat;
//   }

//   &::after {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 111px;
//     height: 158px;
//     content: "";
//     background-image: url(${startRight});
//     background-size: contain;
//     background-repeat: no-repeat;
//   }
// `;

// export const StarList = styled(Ul)`
//   margin-top: 44px;
//   margin-bottom: 44px;
// `;

// export const StarItem = styled(Li)`
//   text-align: left;
//   overflow: hidden;
// `;
import styled from "styled-components";
import { Li, Section, Ul } from "/src/components/styley";
import starsImage from "/src/assets/stars-pic.svg";
import starLeft from "/src/assets/star-point-left.svg";
import starRight from "/src/assets/star-point-right.svg";

export const StyledStarsList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${starsImage});
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 36px;
    left: 0;
    width: 213px;
    height: 170px;
    content: "";
    background-image: url(${starLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    content: "";
    background-image: url(${starRight});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StarList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const StarItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
