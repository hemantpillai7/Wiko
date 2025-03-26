/* eslint-disable react/no-unstable-nested-components */
import { ActivityIndicator, Dimensions, FlatList, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';
import Animated from 'react-native-reanimated';

const dataList = [
    {
        id: 1,
        title: "Former US President Bill Clinton Hospitalised With Fever",
        info: "Former US President Bill Clinton, 78, was hospitalized on Monday with a fever, according to his deputy chief of staff.",
        image_url: "data:image/jpeg;base64,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"
    },
    {
        id: 2,
        title: "US NSA Talks With Bangladesh's Interim PM Amid Rising Minority Violence",
        info: "US National Security Advisor Jake Sullivan spoke with Bangladesh interim government's Chief Adviser Muhammad Yunus, expressing commitment to protecting human rights.",
        image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXGBkYFxcXGBoaGBoYFxkYGB0XGBcYHSggGB0lHRcXITEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUvLS0tLTAyLTUtLS4tLS0vLS0tLS0vLS8tLS0tLS0tLS0tLS0tLS0uLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABBEAACAQIEAwUFBgUCBgIDAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxFEJSwdHwByNicuGCkhUzQ1Oi8RayVMLi/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EADIRAAICAQQBAwIGAQMFAQAAAAECAAMRBBIhMUEFUWETcSIygZGhsfAUQlIjYtHh8RX/2gAMAwEAAhEDEQA/ABVSNaExd4sY6UbiSAN6XXFHUV7+vk5MTst28CQi4a1D1sVHUVAwHWmAAYL659xJu9J319TU1jFumqMy+asR9DQJVetdD7IdnsI+D7+8mYgsSZaYXoAaU12pq0te+wEjOMD/AAQlLNY2BiU8XDrcclm5FjJ+dRWcc6NnRmVuqmD8qsPG8DhMRcsWcEGFxyZkOAFiZOYU4udmeGYQImKuTcbmzsJ9Auw86Ub1GhFG5Wy3+3bzj7e0MwcnjGB5lLxHF77lS924xUystseoHWtMVxG7ccO7uzL7JJ9nWdPfT7td2NWwgv2HJtGJBMxm2IPMU9/+C4NEDu1wmAcuc6mNtNhVH9T0FdS2gcHI4AyPcfEhUvZiuB+8p7docUzKTeclDKzGhgjp0NHX+1WLVQO/aTv4V/SnN3BoohEVR0A/OkHGMGm7Qp5Hb5ispfWdE7gNThffA/r/ANxw6awLweYBwvid3Dt3lpiGIIJIBkHWoMbinu3Gu3CS7mSYjkB+VE4nhIZrP2e4WF3wnNEq8wQY0IggimXavskcJaW6LueWCkEREgnl6VvpqtIXRgRufgccnEzm+qAQV6+Yo4Vj3sXVu24zLtIka+VOcJxq8184xsucLlHh8Ma8p8zQ/F+zJw+EXFteEEKxWNg3nzrnXFO0t24CiEpb6DQn1O/upTVazRsC4wx5X5+RC1GxeCMToa8QXE4l8RibyWsiqZDKgkHRQXO8Zj8OtB9sO1V8uLaYm1ibUi4uVASsGVVnXRjG8CuW2bLXWCrqT76Zjsvi4JCbdDB+cVgX6vcwPQH5QPEMtbHkTp2C/i3fAy3LFon8S5hp/aZ+RrXi3aC9jcrOy92NVRAQPUzua5UuIu2myXAR5Nv6g1cOxma7dWwhH8wnJmMDNvE+YmmPTrqa7Muo+/tB2Bp0finazvFshrAy23Vz4t8mwiOtBcb7bYi9cU2SbCAQQCCSTz2qPjfZvF2bJuOEyrvDSdTG1B8S4BicPaW9cQZCQNGBPi20rYpp0RwRtPYHOefPBgLXYcYMZ8U7YC9gvs1y2z3YH8yRGYGc0UJ2M4pbw143LiMxywuWNCdzrQXCuD4jE5u6t5su8kDfbejz2dxdrxvYIA5iCPlRDXpURqQQM9jMitizA8xjj+2+LF4lSFtZhCFQWy6SJnc601xfbLA3LiNcsuxCspLLOUNHKddqqVrAX8Qx7q2XI1MRoPfWmN4Di7al3sOqrqW00HuNBOj0hwpIUjjggGS1hU8Zj3tj2vs3rS4bDK2TMuZiMoVVIIUA6nas7c9qsPiMMlmyXLB0JlSAAoPM0gXgWLKhhh7hBEg5dxS/E23ttkuWyrdCIPzotWi0wK7Dkqc9jv5g2uPOcy78D7T4azw9rLsRcy3IXKxktMagRVDsGEXQ7VK10dKLsYK8yZlsuV6hDFHqoroLN/yOTkyptLcZlt7I9o8Ph8FcS5dCXJcqpmTI0jSq92e4y1+/a+2YhhaU5yHMLK6gHlv16UjvMQYK7byIqQI/O2w/0n9Kr/oaxvby3njj7Tvr5I56nQ+N/wARbKXe7tWhiFVQc6sIkzoJHKBU/HOL4W+MJeF62HW6hKZhmCtoQRvpp8K5pcujbJHuorAMMwJX5UqfSqUAKZBHn3haryzYzOmdosNgMYU73FIpSYy3UHtRMz6VyDiDW1vXEtuWRXKq2hkA7yN6K4lkJJyjfpS+3lmco0pvQaQ0LjcSPbjiVvuwcA4nUuB8Ds93auYXGshABuQwIY7mVPs9KK4721wdq73bXAxA1K+IAydJHOuVZ1P3anwypl9gUpZ6SLG3WuT7cDP6nzLpqt3Cw3GWlPWgGtL504unfSobNsT7NaKOQIOyrcYtOAWJk0JfsKOtPrn9tQXFXmtFW0yj6ZDwBFAwI6muodm8QMPwrvR4siu8HSYJ0qiEj8NB4vit7u2sC44tGQU0iDqRtSPqOjbXoteeAwJz5A8cS6Oml/FjkiWng3a8YjH2Hu21tAK6CDPieIkkCNiPfUvbnsniL+L762M6sqjf2cukGeXOuegjpFPsH2yxdtci3ZA0GdQxHvoVvpVlFq3aLAIG3DZxj78mCTWLYpS/PecidQwWCS1Yw2EusGPhEH72QZzA6eGiMRazE5uuhrmnZjHvcxaX71xneHILGFVNFYQBzzciNuddB4piGVSyAEnzivI62kVWlGbc2ct7An2m5SWKBgMAjj7QLGKoMRoPOkfHuGretlR4TyYcqRY58b38prJUAKH3O8lpEDedJontNdxCZVts0bMSJ1Gxga8zPupUACH5xEPZa7cwmOtWruoD6k7FSIDe78qv/bi6L/CzdBkZlcegaPpVF4gX7g3LyBXtwQVJO4M+1rvHwolO0bnAjBBEyFQA5JzAEzttNbGh0bXtXdX+ZGHH/b5iesuVBtboj+ZZf4kYZjwpLYkki0AOpABj31wVbZZ1tjQlguvUmNq7Rx3jtzE27dru0UIyNmDEzk5RGlVbtJh7V3E28Vbsm2/ep3mVgyGSBnyESDMTr7udXPpuoqpLFecsTyOB4gjchYDPtiXPsv2aSxh1yWkzc2PtmeZJ+lQcVxtuyYZi7nQIgkny8vfSu0t9caior5Gnvczs2gJ1iYWfdM0x49wfPFxGy+BliYOZvvTB1FYjYJ/EZoLkDiRYzgdvGJ/OtFCfZYQSPQqd/Kqjh8G3DrwzkvbOburoGz6Mun4gUGnPWui8A4dcUQx0ygEbzHMmg8WgsNfcoLirluBSduTBZ57x61K2lDgdSGrDj5h/bS0oskrj3uZ7ijuS6keJpiBrC/lTj+JsjA2VB3uWx8Af0qo38bhzhbad0Tfzhu9yATbzyCzc2yEec1csX2u4ddVUvI7BYIDWmIkCJ0FelrFm2mwIxAJPQ+PaY9m0M6FgPEj/AIVoct8kz4lHyNT9i+0d/EYi/au5WRWuBCBBAVssHr/ig+zvafBWXxBGa3bZ1Nsd22wQA6ASNZqe32p4dhlc4W2zO0khUYZiddWcADWq6iqyyywmoktjHHX6+JyMoC/i6zGXZ3DC3jsai+yO7IHTOCxHx199Lu3tvGrhr5OIs9y2mUWyHCsYAzZt/dQfYvjyI+Jv4u4qPeZWjWAAICj0EUL2tfhr2bj2r5uXWYME71yCxbXwHSBJrkpsXUjcCfyjO3I6Hv8A3OZwa+/5xLtiXxCYaz9mVWf+WCG0GXTNr6VWP4r3FCYcCO9L7c8mUzPlMU2x/a7D2hhwl1GllV1BkhCpBaBtBj4VVu3tnDNiExNq8js4yMoaSCNmA5edV0NLDUKzqR2Rwefg/E61gVIU+0h7B8IF/EHvVlLYzEdSTAHpv8KsHGe3ZsYlsPaw4ZLZAds2XWJIURGgIqvdj+LjC38znwMMrabcw3uq143s3g8RdOJF+A8FwrLlJHOTqJG9MazZ/qCbwSuOO8Z/SVQNs/AcHzBP4gcORrFvGW1AbNbDcsy3CFE+YLCrRxK7dt20Nmwt46AqXCQI3kgzVJ7Z9oLV42sFhmDItxDdceyAhBCA7HWJjpTb+IPG7thLAw90KzuQxADeELO3rFKGi11qrYdlsA564xnHMJvUbmHx1KN2nxF65i7puWhbICrkDBogbyOs1e+xHErV9FsdxDWrayzBSCdtOfnXOrrXHd7lx87uZJIjy2HpV3/hqnju6/dX6mtL1CtRpflQOs/5+8Fpyd+ZnFOKWL2NtYRMPrbxH8xiqhYCkxpqdSKB/iDwa4cRb+z4clO7OYoukz5UPwfXi906R9pb/wAVpv217S4rD4tLNhrYU2w5zLmMliN5HIUsqvVdWtX/AAzyT57hCQyEt7wbt7gLdnB2SlpVc3LakgQdVMzVqtdn8LlH8hNhy8qQfxLYnD4UaS2It/8A1afrV0AMD0rOvusGnQ7jklvP2h0A3n9JxtgaxJoi5aHWtUta716fdBbeZC5JrQii2sjrUJt/1CpDCcVMHYTyoDEJrtTbuvMUJiLMn2hRkfmAuQlYsdfKte7U8qO+yn8S1r9kPUUf6g94l9Fs9STs5bBulHOUFWg9IhiPflHwrpOIvgJMGIkR57RXNPsh6iri+OJsKRqcon+5dCPlXk/XtMocXr54P/mbXp7ts+k3jqB3Ld576XDC2rYJCkkFnI3YjkAdBrv5VHxPvHJIyqTMEHNvGpU6EeXrU17haXpd0FydsxlQOgHKkl7gVvQm0BzEEisHiaAzNO0DBsI1tlyswCk7jMWAkGg7GFgAZdvKisRbzLbtATliZ2hZ39SR8K2Sw2/516n0RNlLMfJmZrzucD2mly3pt8qjw2HGZZBAkEx5EHl6UR3bT/mvRbb9mta0B62Q+RFASGDY6jLj3am3h7yqF0yFz1ZgVAXT1NJn43fxrhMLhCUOjXGMQCeRG1AceS0WtviVY920qVOrA7ieq6NHl6074v22aMlpGdeZUhU8/Z6dK8PZpzS5RhyJsizeMgwHsnx6+ly7YvZh3ZIII5Bo0J3103pjicWS1511ym2RzBOaNjuIJPuqmY7tDcu4gQoS2BlCj4yfOdauXB7BGGM+08nXfymqAKrhmHHE4MWyBB8S0kk7modKG4Xx9MQzKoKsCYDQCY3geXSmJDdPlXu62G0bevH2mM6nPMHWJojStkn8Pyrck/h+VSWl0XEHaP2a0NoUUW/p+VZ/p+VduxOKAwQWhUgtr0qcf2/KvQf6flXFpwQCDFPOvGw6ncA0YI/DW0/0/Kq7zJ+mIMiKBA0HlWrWlnMZJ60SWUakCK0N5SPCq9PEYHy1qr2BBuY4En6e7gSDux51OjEbMw9CR9KnWyOeSeniHnzFagCfEkfMe5hpQk1VVnCnMv8ARK8mDW0CaqSpmZB1nmZ3moXWWzs7M0RLEkxvEmjmC9KicJPs0cGCevMgvu1wrnu3HCmVBYkAxEgE6UWeIYj/APKxA8g9R+DpWeCoIU9j+BJWvHmHOi/s14FX9miGXyrMg6fKgBozt5kLIv7NDtbWiXOu3yqF4/DV1M5sGRMijnQ5w67yamvvbX2yB0AEk/kKDfiSDRLQPm5n5D9aC2trTokn4gmrz3N/sq9TWv2ReRNBXOL3I0CLryQTp5kUN/x2+rTm0HkAJPoPf7xQT6occL/Mj6Ffn+odx4HD2GukHNsinck9eg/WruuHCYKxcAlRbHeH+ptSxA5GfpXPMdelO8cd4M4LAk6qCM3vj6Cup9n3QIMMdQqgCdc1th4W940PmKytZbZqV/Gf08QtZWs/hEpHE7hCRbzRIAysRvr1pVw83WzFjdA19ogxGhiBtVh7TYBsM48R7pnGQjfUEZW5abz5Uo47jlw+Ed5glSEkySSIHr1rHA2nE0gQRmTWbEKIbfX4+dSG2fxfKq8vEThT3VxSVBQBgdVzIjQQfMnnzp3hcUlxcyMCPI/Ucq9tprkZAFPjqY7pyTJu7P4q9Fs/i+VeSP2a3Uj9mmcmV2iDY7AC6hRzIPxHmKpvE+z2NSRaHepMyujD+5Z+lX2R+zQmA4yBi3w40IRWHmTMgj/bWT6sMU7/ACIfTqC2JV+Bdnbo/m31aZ0T9Y+lW/EcQa1Ye86nwgkCN25D40erGfERPlVV7d8Rm2tsfeb5Lufyrz2nrOpuVD5P8R5iK0JlJDsIIaGBzZuebcmn3Du2V1T/ADVDjqPC36GkBTwsfI1H3Gp9FPxr2+0BguJlKcjM6dwrjNq//wAthm/CdD+h91MfF5fGuS4csuqmIO401qwcN7ZXEIW8M6/iHtDz86lqiOpcNL0oboPjWxDdPnUWEvrcUOjZlbYipo86DLzUBunzraW6V6B51tlqpM6awenzrbWsjzr0CoM6I+O4l8wtLpJEmpVwLTlAnwz6xzorE2YY3IJIYAchqBUWN4itvUss7xIHTYnlXmPU7ntt2Z4HiaFGFXOJlu2WG5o3B4S5lKg6ROu0gGo+E8Qs3NUVtemoknbSi8LxOySQrOX1BkHYeQ0FZle9HDA9RpnUr1B8PezqGA93MEaEGvXHl8qkTDgCV+9JI8+te5TXt6bN6BpkuNrEQYjy+Va6dPlRBU+ValDRgZSHlTNeMDUjrrvWpHnSwMLB7gNaqcqs5+6JA6tyqZl86A4lcAYWyeWvqf8AEfOham3bXgdmQeOZV8LfL2XLE5kuvJ6a5h8j862kAD99PzFCW37rEXbbaLdAuL0zKArD86KsD+Wp09kRtuNzWWIKZ3U7nXU0DhQHVWQgAlgwOzQSNus7GjrjQrctCdoG1LOBeG2VOniJGv4iTvUTo9wKqLlvNqMwBG+jeFgfjV44OhNm2VP8zDObLzzVdNfVSrD3Vz9RrmG418q6XwlQL9wAeG/bW5/rHhb5ZKhupEWdoEGJF57pIS2QAsiIUjXLvOjE+q1zhroxb3MXdWbGHa2qWgYBFxiJY9AFk9ZA2mumcevCwWuspZCIugCTkPhJA5nbTekHZ/ssyWLyMcq35AtnXKmuVnP4gDEDrrtQTWN4bHEMlmKysS9pLY+24i2RoyoR0PgAMfAVU8SbmFbOpJQnQjceRq79ureXFYZ/xo9s+q5WH51Uu0TZbeux+tMdcwSkx3wXtLbuiGhW59D5xyp6lzmACOo1HxrjNm4QZBg9aunZDj4Dm3cMZh7swnX3gAesVo6bXHIWzn5ljXnqXHF4tbaG4+igfsCuePxVlxlvFEQDBI5ZCcpHuH0ojtTxk32yL7CnQdT1pX9heJaMp212jSJOximNZS16bAO/85nAhD8zq3aAslk31gqqFtecbD36fGuY8X4g12+xzhxA8WQqBoJAUnQAkij7nG7yYK5hnJdGyi25PiWGWUYeg386CwmBizmO7EZj0G5/fWkfTtIaCd/BHZ+Pv8wl9n1MASG8pyGT90GIjU0ThLcqvVoX/azfkVpvwrg6YixfuF8uQeID7oAME9Z8vrShHFsJOozAyOsQR7wAa2ltRzuQ5i20rwZFYSTA2WY9SSB+RqPEYeKMwDDNH70H+amxCAiff7qYQkDmDIhXYriXd3u6Y+B/gG5H37fCumYHh1y77CmOuwHvrjNvIklw2YkhcuhAB3+Irq3Y7tRdxVoWbmdXtKJMQHXbNp97aaz/AFB3Rd9Y+/xDqVAy0stvg1hP+dek/hTX51OlzCJ7GHL/AN5/KhbNgbkH9aY4bFgHwoPhWMfruMsx/qV+uPAniY9SYXCW/SJP0qN8daOj4W3Plp+VN8HxCTLDby59KZC1bujxoDPlr8aVfch5z+5hFfM4jwW7peUgiLupO5YyT7hIUeQFMLmBUAhXLZ/anf0B6Ryo7thwtsLebRSl1iyQTOUASDpoQT51WLXEgZOsLJgTJ8hSDhiZoIRjMZcIu2Miw4ts3iymJhSVkgbAR9aJXhGHuOzoDcYnMrK0AZwGBBHLnNKuGY13eBkTmRlJ8xJkfKrFgMTF1vCBcVQDl9llOqsvvJEUPaQcwmeJtl5cgSPmayPOpbqAGI6/OoWZelev0pzSv2mbb+czRl86199bkitCBTQlIyxJGY1ESKlusZ2qNSelLr1CTFuIss2gAqp4/Fj70zO8Tv1FWjGE903hkGAZGwOs/ECqnjwk6sARoDOvvGxrP1DZsx7Sth4EXcYtG4oKxmXxI3nrofIiQag4HjjctNoQVciOkkkj51l25lMMYBJKOPZzGPCegP1qPs3cDfaIkHvASJjUrGvvBpc8GD7ENuvoTMgjc0Pg7UZDGhGUzG+4+hHvqS6PDB+UflWPalcoMREa9I/MVwnGHwYGn/o10fgTTZw77nLB+EflXNLV0EZtpjz9QK6D2VxE4RD+FmB9zH8jVWkGedu7ANmZIC3LTH0DifdrPuo3EWwTqSJ1rbtUgbDXgf8AtP8AQ/4r28hyjrHzioHUgyh/xLGU4R+S3iv+4f4qs8RRXVkbf5Vav4q2ScGtwaG3cU/GR9YqlcZvFYcb7685APvomOMyQeJUsVZyMV6URgLE+Lzr3itwMQ456+lecNvQCD6imNCVGpG79PvLuTs4hbJ7I/qpmrwhJUsqmMwUkDNsCdlO8VYuyfZq1et279y3duEu8KHVbcIY8ehMTM6g9OdMe1PGMO1gWEuBsjhm7pAthMobwr+NpO4nbetg6pQ/X3PtAKpJxKZiYYImgQO1xiRtKqBM6kzsPWi+GcOvY68LFlYQazuFH4nI3Y8h6+Zr3g/Cb2OvC1aBCg+JjqFH4m6sennyGtdm4Pwi1gbS2LKhrhEydz1dz0+uw8vP63Wm1iqflz+80QBQPdv6nJO0nZu/gHHiJVhAuAEKeqOP133G1VO47AFWPP8A9e6K+kMRg1xFpsNiQGLDQgQGH4l/CwPw0NcV7Y9lHwtw23kof+Vc6+TdGHMe/wBK6TVGlsHqQQLxg/mH8ytcMJYmN4gf6tP36U4xAg5f3r/ikvCgbd9VbnpVmtcMuXXYW7bXGOkLoB6sdBXotLqFarcxxjuJuhBxEt67DlxrHhSfm3zNXb+GVxmN665n2UA0mNSTpyJA+FC2uxF0x3j27fkozH47U77O9m2wt0XBdDowKuCsHXUHfWD9aXu9R0jj6avk/r/cs1FuwnEuDXTAn4TWDEHYcqFvvH9x2HShMS7BcloTcPPkoP32J+Q3NAIUDJ4ilaPY21BkybF8bcP3aCQvttBaD0gbmn3BeIPc9jEJ5qRr8NxVet3Bh7QW2Ax5s2uYndiPWa0OYW3uPqwBiNB6CKR1GroxtQfrHaPTbycucfH/AMh38Rsa82lYB0WS7qJyFtATB9nSD0zKTpXNO8AusRBXkOk9OvKunYE/yguhZAC39zAtMe+ud4vshfuOtzAqzWmYq2dlhGDalVeCU1O07c6zc7uZomkpxHPZ5huDz5jcbR56+dXDh+Ba44Cr4QNWOg9BR3BODWbCKioNABmI8RMbknXWm2NxYtLuATt5edCIGZP0yTgSu8V4eCgv2ZKHRwfaRhoQRSU+lW/A4clnuEnKw9meu9ILmDVmYAlTOnNT+YrY0muAXbZ48wFmkbJ28xXB6VmWicTgXTU7dRt/ihIPWtdHVxlTkRJgVOCIW89RWuvUVq0dTWaVXqT5irjmOcRh03bVo+Xymkl0208BPiO5IJHnyj/1RnHcUA5t2mgM+W5d0zM2konRVnU+RpNhFa5l7pfA7HKGnxKDo7s3WCQo6Csh2yxPvIbuE4i3aIIMQNCI06wRtSrsygS9ikUkjwHqdc0z6TFMxgla5kunNlk+HlA1Mj3CPrUHC+HgOzAFQ2sfefXmT93y50NuZUGS4gb6HY7VqiE/dMeen1+tWG5w5RoCR4Q2/MgGPXWtf+Gqx0RmGkjVgdiQT0P0NFFTYzJxEfCsO9wuEBKqdD93xbjNzMhtBVu4VduWbRsgoQzM2vtSQBAXc7VBjsdiUtMLFoBwsgd22vun4Uk4TxT7dba1fUWr6OCLh8OV48Dw2xnQrOx86Tvr1AG7x8RqpajwZcsV2iVrbLcClR4HKt7MwPErCRuPjTt3DZcuxEg9fPyqg5WuC6yW8xuYYC6JA/moSoMny0n+gdKfvxYoF7vLAVZDCTJE8jVdL9SzidfSAPwz3tzZDYHEhh/02OnVYI38wK4/x67NpDG6g/FRXWMfjmxNq5bc2wrqUMAgnNpzOh86rGI7I4dkCtceFAAGbppyXyPwrQFL4xACppygtpWW2iukv2LwYOgusemf/wDnpFaJ2Mwx2W6dY0af/wBd/KqCiwNulziV7A8Zu/Zvs6O6qCxcAwrZ43jU6DY0w7O8BvY24LNrRVIzNyQH6sRy/KnVvsxYVYC3IG/iPzMaHlVq7PcVbDrbs2EtKpYA+Ek6kCWJOpMz50TUG+1dvAHn5+TLIyVjK/m/qWrg/CrWCtLYsKDcOuvnu7nePqdB5MMPhokkyx1ZjuT+Q6DlRFvChJ1kkyzHcnqf05ViXVJgEE1nKuOYJjmQ3rAYRqCNQRuCNiD1oPiXD7eLtNh8QozRM7TG1xDyIPw22IltkofGWxA1ykGQ3MHbT12jnNcwzzIBxPnvth2du4W93b7jW1cGzAc/UaSK6/2dx1u7hbbIoUFR4QIgx4gY5gg0w4twq3jbTWL6wd5G6nYXE/fUVzfhFy7w3E/Y8R7DsDbfXKSTGZegOgI5GgW7imB+0fqcPye5bsZ7Va2LnXWNfhWvErgzVDYua0kDgg+0YxkYjBLe0Cbj6KPX9NKku4JbZKLJ1lmOpZuZ+UegqPg6XDce8/sohUAcz5ei/U1tj8YAWM/vyrZ1l5fAB4iuhr2Z9/MGxeWQDyoXH8TULG4/TrSXinFgCZP+kb++q1jcY1zcwOSjalRXnuaQMvPAeJd9fFtDrcMNz8IBnbyq94HDpbC2woCqoWBsI0geVc1/hnZHeu/4Vyj1cgn5L866WbkCahlwcSlhJ4nmPxwtLI1bkOnmaT2LjXnk6xSriuONy4VXYVYuC4Xu7ctua4riWGK1z5jF9FA2Ea0gu3AXAQaDc1Ped8RcKJ4ba+03XyFbYNrZc27eoUwT51wGJVRt7jTh+EDCW9mNfPypTxfsu/eE2QMhExMQelWu1aAQDkN/Op7L6Uam56jlTMy597TmJ9PlUd0kKYGoBj15VPcQ+Vai2fKvR9iLETnw4e10smbwqNWHNrhYuV8z4vjTbiOKTDrK6EIFtrEwNidvOiMancXVUKFtQ7FuRJ2HqKSm4l+8Hd1EHQHpp19DWU6kHmDORC+FWPC1xz4rgzEH8A6/L4Vtw66Qr3X++SQOQXZQPdSTHdoAb9zITlC92ANoHlUF3iBZlBaECgRMD3/CqGRL5iW1H9qH/wAForhmMKsF0AMAnMy89zDAHfnQDXAQp6on/wBFr0WzGbKY6wY+O1PKAVGYWP7t9dXFxZjncfWATyuTOw16mkHElS8CGtqA3tQW8W2pJMyI38qYjgN//t++R0J/I615e4LeUFmSAIBMjmQB8zFWT6Y/3S6iBDrrOXLM65ZJAJ56kn1JrVx+XyEU1/4Df/Bz3kenWg8ZgXt5c6wWEj00/WiIa+lxDjmCLp++leMf38/rW5rRjRcSSJNwzHdy+eJ0IAgHf12qfCcXCKVOeC5bwkLEiJHQ+VLrlQmqvUp5i7CPb/HEYXPC8sCB4tDKhZfTU6TSfDP40/vU/MVCa2w/tr/cv1FAKBRxKTpPELzHn1qLg8BySff8a8u3c3x/c9K1wFzxkCJiYPMTsfLzrLxxKeY9Ro8J369aCxbS0EBh9Dv8qxro22H3Z3QjkfLX6cq9yy0GZj3Ea/Oh4loNacsYbwtP8tupMnlupA9/qKH7RYaxftKL1ubiOrIOaupDAhuaGPfzpotpUGZo8M6xqAeU8p8qr/EMaWbOdBypa5to4jFK7jFWLty3iOu8VDh4DeVZeu5j0HM9aibHAMYE6aUntzHs4lhsX4w7f36++D/iqFx/jDF2RDr949PIVaRjgMI1wEEMMwgyDGm/r9K5s7ksxOpNPVrwMwmnHBb5m0VrtJrUNyqHEyYQbsQPeSAKOBDCXzsFeKYYsU8TuWVvxD2RA91WfHcUm3lHtEa1DwrhGVEQCAqAfKiMctu0NhJoZwTIJEpWN7Qtg2K92rPo5LExBmAI9DXQOCC9esWzdZQzKC2URvrAHKBA91c+xfDfteMffKUCH15AV1LCgKoUDYAV1mBjEG+c5mnELNy3YZcOgLkaSQN+cmoOznDvs9kF9WPibzYkU2Ra3dfAQPwmPhpQcwRc7SITh3BtzMnn61Lh7emtLeCNNlSRlkBiPUbT1prbWRVpnnuc4KRvOtZlHU157q9Qa7V6eVEjuWQwg6g8iARSPjHAcL3bHubcmADlE6nl0qxNHSlXHfZUdSSR1gUDUH/pmScCc+v9kFPit3Co15DYe+hP/iI3a4x9Mu9Xi1aJny/SocWpGnqY676T76zCBAbjDBYyZE6Kg/8AAUfYw+Ia34Sxt9M6x7X4SfxeVRYzVp6Ip/8AEfGhVP7H761oIMqIU9R7ZwmLmGcoDOpYRpqRp13qZeHYgzOITzGY/PTyFV4Mep/e1a5j1NFFZPRH7SyyxWsLfMH7QoJncmRrE7dY+Na2eHXXAY3EEgEBiJ1jy8//ABNIA56mvTcPU1b6Te4/aGEejhlxv+rbGpGvOOmn70pbjLVxGyzm0Gqrpry2oIueprLCNcFwpqLcZ9dp+p2+NSF28sRiWwZu5u9G/wBp/Som73o/+3/FG2MQqEZxJAghladmEbf1A9dKI/4pZhR3aHLlg5TJgR4tNf1jeuZz4WLtE572Nm/2/wCKjs7rHUfWm2L4lbcKAiplYHwIZMAjL6foKV2zAU+f0j970EkkcjEqJcMViwQXGjjRkPXofqD50uwGI7y+ADldRKt01Gh6jqKCx/FreJsribDek8+qOOUdeRoDsViM2KJ122O+40PnSFXKnMoV8zo1s5idBnTRlPMH8o2PuNS2hsNY1ysd1P4W/WpWRR4zAIB1PIb60l4nxQsCF8Kc25t6dBSzuFEuiFjgT3inEM2kjKu/QmqvisUbjabVHxHH5vCuiigRdJ0H+TWdYxYzRrQKMSa7fMERpWnEODXrmFdkOQkaH7xXmR0Hzp3w7hQRe9vwI1CnYDq36VQe3XbVr5OHw5ISYJG7HbKI5elGrq4y0E1m44WIOA8dfD57DeK02hA1ytI8S+8bc6ZjVjW3BOzpskNeX+ZyX8E8z1P0qVE8R0pgRvTg4kYFT9nLavjbIYwobMf9AJHzitMRoPdTLsDh8125cMQqge8mfyoq9ZjHE6Tf4kAYGw/Skd7O7lm9w6cqOw2HGrdayxZzXD0ofAlcATTs9gcrExqdZq5Ye1SzBYTxAcqdKQNiKExyYC1vaSKsUDxa6VtO41yqxgc4B0o/OOvwobH3GFtyqyQrEL1MGJocEncC4bi+8CqNtJj0Gnuqwl40qi9hb57hXf2jJgc4JX3Dwz76tH2pjqF0o2Iteu1yJSjPUVNhFJO/KoEg86IwSiTrXom6gRI7hMmlPG9QBmhh9DTPOoJJ21map9vFM6LdETcOaG0jMZUc9csD3UvqWwm33kN1CEuFSBII57VDexJk6A9IPw384re3cMnMo06GefpSvjWIe2jd2rMxEIApOpEEkjaJpEwAEsF3F2yA5YBSiazoCFH+R76Dbi9g6m9b8/EOVI79tjh1t6SFA0B+6NaU/wDCWAOpg8oo63sB1Lbpc/8AiVn/ALif7uteNxSzOU3UB9dap2K4UWAJJ0jTkecHWf8A3Su1iVBB1002PKrHWOvgS6HM6I3E7X/dT41G3FbP/dT41SL3EbesnXnIihb/ABG3BgyfIV3/AOg48CFzOmcFuC4WxBYdzaOkQQ5UZmJ6qNAB1Bo0L4MMiKEN+6bt1dsqrN4jT+o219xrm3De0LnDNhQwUu2USY0dlMz5EH/dVzweJcYhLeohCvXVrqAmfMfWsnU32WuWP7RqsjEN4pjxc7+44Aa1fNsvJMqEUQfQg/Gkq8bsEx3qT660ZwbFh7eMuXmyILzORGmjFT66fWuXY+4puMyaDMcvpOlM6XV2hdmM4g7kGczpL8TtLBNxR8fyrW5xzDje6snXn+//AHVVHGsPkUMlwvAmIAmOppfexvfMtuzZhmMCWzE8vICjvrGx1A7FzD+ymGxJYrahlJllkgQPvdBV/wCzOGe1eLsMsDns2o8M9eYPl0o7szwVcPh1tlgbh1uHSSx5QOQ2qXFX0tEkED03J86zBqWAIEZ+kCI14nxM3GI1VJnLO8c2P5Uh4nxKdJ0r37S13wKNek6t6DemPDuBW0XvbxDk6gbqPID7x5UL8VhknbWIh4fw+5f8Q8Nv8baD3fi91WjC8PtYde8blrLb6c/LyHKi7t5ba95dhVUaKdlHnGhP0+dcj7ZdrLmMbu7cizMADdyfLzo60qvJgdz2HA6m/bTtg+Lf7Ph57smPDu56CN6Y9i+C2sOgxN7xXGAKaaJvIH9Ugz8qS4bhQwy2Hmb12WEEEKF1EdNN56Va7Do9q2xJRGAPOFZpZl9xNPf6cive3n+JZVGdok16+HuQJK7knQgDUgdRoPSkbp4m9ac4QJbNyHzjIY0I3IGxpPi23oCLnJmlSoCxZj7mhmrR2Gw5XCtc53HMeiwv1DVTMcT7q6BwK064WyCRlKqQPXU8vOjsuElhzLPY9gCjcFY1mKW4KQfFr0p1YpRpRofaQb0QpioUqVTrQjFjCwNKgxV0KrMdFVST7hNTzQ+MUMjqdQVIj1FQvYlBKbwfibZ8pVcmRWBAiCSdOkU7TiQ5HT0NVHDXArkHosKYCjTfqxpxYvORMj4U/eoWwgdTjXuUMYNaJ5Ci8OrQTFZWVq2NExEPaa6yYa8QviKEL6t4R9aTC2FBTplj0UR+QrKyldSckfaUfqbpPIbbkVDcBGpAjQc56cxWVlLiLwDFoSY9w9x5n5e6h0aJknUx+9aysqZ0j4ndyWneRoIGsa7Vz8hh1+NZWUC3loevqatM671rWVlUxxCZnoq1dnsa2VrnfOGVcpO5XXMrCQ2hggiNwDXtZUKgZsGSWK8iNuyIt3RdV2a6BBhxC+ItMLOuw1Pwp+vC8ODIs2weoRf0rKyvV6alErGBFnckxXf7I2HuNcbOSxmJgDyECgeM8LTBlMTYyrk0KtJzE+c+vwrKyhX6aoo34ROR2B7hljtALltD30uwk21OXKeYMan40HiuKzCk6TtOk/1Ma8rK8malDYmmrkrmO+B9tbGGu20cC4XkXbq/9OYyhfLcn3V0MWV1v/cjPJPgGmrjoT+4rKyrKoU4gbBnB95yLtr2obFOUViLIMAD7/KfSgeBfyW7wqjPHgBmEPUf1VlZW16Zpa7gzWDPiRqXNRCJxJcOpa4STqq5VJO3v5c6bYJ21AnKd+mnPy2FZWVqakDYftKaYZYQ0W/C56AfNhSvHOeW5MD1iZ9AKysrz9S/hmyOol4i0CPU11TDDLasp+G2v0FZWVe8YUSgMbYY6Cd6b4fesrKQeQ0YLW6DWsrKCYGFzUd06H0NZWVy9iDxOasiG4rOoMTlbLJBJprbxTgQLjAdIFZWVra1MOD8SdO2+vnwZ//Z"
    },
    {
        id: 3,
        title: "Pak Government Agrees To Consult Imran Khan As Negotiations Begin",
        info: "As negotiations between the treasury and the opposition began, the government agreed to consult Pakistan Tehreek-e-Insaf's Imran Khan.",
        image_url: "https://images.indianexpress.com/2025/03/putin-1.jpg?w=430"
    },
    {
        id: 4,
        title: "Why Donald Trump Is Against TikTok Ban In US",
        info: "President-elect Donald Trump's support for TikTok has sparked speculation about potential solutions to prevent the app's ban in the US.",
        image_url: "https://www.ndtv.com/news/images/trump_tiktok.jpg"
    },
    {
        id: 5,
        title: "2 Men Dragged For 300 Metres By Truck In UP's Agra, Driver Arrested: Cops",
        info: "A truck driver dragged two people for about 300 metres in Agra under his vehicle; police have arrested the driver.",
        image_url: "https://www.ndtv.com/news/images/agra_truck_incident.jpg"
    },
    {
        id: 6,
        title: "German President Urges Unity After 'Dark Shadow' Of Christmas Market Attack",
        info: "Germany's president said a deadly car-ramming attack on a Christmas market cast a 'dark shadow' over celebrations but urged unity.",
        image_url: "https://www.ndtv.com/news/images/germany_christmas_attack.jpg"
    },
    {
        id: 7,
        title: "21-Year-Old Killed, Another Injured In Stabbing By Juveniles In Delhi: Cops",
        info: "A 21-year-old died and another was critically injured in Delhi's Jahangirpuri area after being stabbed by three juveniles, who were apprehended.",
        image_url: "https://www.ndtv.com/news/images/delhi_stabbing.jpg"
    },
    {
        id: 8,
        title: "US, UK, EU Condemn Pak Military Courts Over Sentencing Of Civilians",
        info: "The US, UK, and EU criticized Pakistan's military courts over sentencing 25 civilians linked to attacks on military facilities.",
        image_url: "https://www.ndtv.com/news/images/pakistan_military_courts.jpg"
    },
    {
        id: 9,
        title: "Israel Confirms It Killed Ex-Hamas Leader Ismail Haniyeh in Iran",
        info: "Defence Minister Israel Katz acknowledged that Israel killed former Hamas chief Ismail Haniyeh in Tehran earlier this year.",
        image_url: "https://www.ndtv.com/news/images/ismail_haniyeh.jpg"
    },
    {
        id: 10,
        title: "Explainer: What Is Panama Canal And Why Has Trump Threatened To Take It Over?",
        info: "Latin American leaders rallied to Panama's defense after US President-elect Donald Trump threatened to reimpose US control over the Panama Canal.",
        image_url: "https://www.ndtv.com/news/images/panama_canal.jpg"
    }
]


const News = ({ navigation }) => {



    const ItemRenderNews = (item) => {

        return (

            <TouchableOpacity style={AppStyles.bannerContainer}
                onPress={() => navigation.navigate('NewsDetailScreen', { item: item })}
            >

                <View style={AppStyles.ImageContainer}>
                    
                    <Image
                        source={item.image_url ? { uri: item?.image_url } : require("../../assets/images/placeholder.jpg")}
                        style={AppStyles.image}
                        resizeMode="stretch"
                    />

                    {/* <CachedImage
                        source={{ uri: item.image_url }}
                        style={AppStyles.image}
                        placeholder={require("../../assets/images/placeholder.jpg")}
                        errorImage={require("../../assets/images/placeholder.jpg")}
                    /> */}

                </View>

                <Text style={AppStyles.TitleText} numberOfLines={2} >{item.title} </Text>

                <Text style={AppStyles.SubText} numberOfLines={2} >{item.info}</Text>

                <Text style={AppStyles.SubText} numberOfLines={2} >{'Apr 17, 2023 | 02:12 PM'}</Text>

            </TouchableOpacity>


        );
    };

    return (
        <KeyboardAvoidingView style={AppStyles.ContainerBg}>

            <Toolbar Title={'News'} style={{ backgroundColor: 'white' }} />

            <View style={AppStyles.LineBg} />


            <FlatList
                nestedScrollEnabled={true}
                data={dataList}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                renderItem={({ item }) => (ItemRenderNews(item))}
            />






        </KeyboardAvoidingView>
    )
}

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
    ContainerBg:
    {
        flex: 1,
        // backgroundColor: 'white',
    },
    LineBg:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#CBCBCB',
    },
    bannerContainer: {
        flexDirection: "column",
        backgroundColor: 'white',
        padding: 25,
        marginBottom: 20,
    },
    ImageContainer: {
        flexDirection: "row",
        width: '100%',
        height: 200,
        alignSelf: 'center',
    },
    image: {
        // flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 10,
        // elevation: 2, // Adds shadow on Android
        // shadowColor: '#000', // Needed for iOS
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 10,
    },
    TitleText:
    {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.AppSecondaryColor,
        textAlign: 'justautoify',
        marginTop: 10,
    },
    SubText:
    {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-Medium',
        color: '#6D6265',
        textAlign: 'auto',
        marginTop: 8,
    },
})

export default News;