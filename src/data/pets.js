const pets = [
    {
        idPet: 1,
        nombre:"Manchas",
        edad:1,
        tipo:"Canino",
        raza:"Criollo",
        links_foto:"https://lh3.googleusercontent.com/bjO_YvojDtbpfPc9O6uV0adVmSniD_DToe1pEi7Skvcp3wvWYXbznypdPnOAXIe1wXGeUykTsuSAuD8toukS1lL5bGMWJMT_A1goKrYyH3aBJJbfXRaLUulibn6l0rTFbPpXAQr8J-0NIbyaMS2T1tVkT88JvwmGynxpC2c37QDBYEXTzNR1bDNxxb2oTr1hOHO9rwVcofVAiBTAA-CLeVDrdxtUu5-ADbqQ0TITQe9T-1FXKWsZciilTK3Ti0tbz7lhPjIJU5dbm-UsGffSW0BBc660x4UXQq9rVqjqq5LVrAkCa6qsngiBxwLH8hnD6w6Ulv1l9EsPdUKHfD3es-Yiai5ziV51q_0z6sTNoro-Sg9UcCIAWgzmb5mZAlY-RP5nB7-TWXhwjxjCU5y2dH6JgHjMfT1kWgnXk_mK34sGJyW4vJwSH7R-N-Jw7jvTZuuL-PDCVL49dsxG6ZnrBYZ4DmSk35Szxj-mV9lHJlPEp5EiJrJjCXHjfCs3KNjLSRDbd_QsNXV6Qd6gSPgrFODAyXCiPM45HNjo8fQTl7nKcV1Ir5C2D2xSxzc7YEYP_NFWatU_0uwPsg6tLw3iNedYsacGEb0NF7hSDBsI23d0ffo1sBtqPVHcjyfkFQvXgPgIX1748QG1c4a8Ynuq_NWlHkRnj7jkcS5fSbG7_c7iotNhxtHz8ltuj7rq74FPxnC1NALzeIbkXEl0x9wR6BzVcdamqBfx0vTvvxiM8hPK-MlFcx9CKStYrSVI=w1216-h912-no?authuser=0"
    },
    {
        idPet: 2,
        nombre:"Pizza",
        edad:4,
        tipo:"Felino",
        raza:"Criollo",
        links_foto:"https://lh3.googleusercontent.com/thp9QeRJ-kY6ncmgoopSML4lu686DghK2uA5HwtILqpt8cPAbcFC_s_RCKfa-_8t65Doax4hM_y2MY_Y0fkOSbMxUArORqcYCA2ZUBtbWPVaTSG6QK5o0wx4A9PWqkKIBbBp78zDE4o2tGivQsnZHWHQ8shrWnSsD-dw9EnnvJ26ZQe1yOZEU5oXunuytWGdIlajZu0_K1_xBM05GmmuqTr07RmHCoH1RsUG-2_Tof_K5b24gVYu0EfpN1xb2Nyj2IvEudSTpz294NsHISTyuNwrm6pM2AUpWllEIDwycs37A5VRx_A4ut10Dhguu7x8PHzYuPOU-3LyJ0Ae430kQrkwIakSjRYSs6qG6OQ6azkU-DryrKMwCi99LX5yfcJ2cErr4JjSh1EvqmImkHfLYM53eiadPAg-uKzJzJPzM8YlXlgZf84mv3MGC7-v6VAW7HaiHg0akwswjZik6uvMuipd7CuyN1TlYyVtUEPZoMtHF9pPySD1e7mcOyd4GVAl0GyVaZ5pOvAdCPS0zM3H-JvQtkU1vSqM-e85ZBsxzXfiiw7TTLO2Vl99olWz2FlvwtVhokN3LQFFgW5LcvwzQ1Kyvg9YP5OplLMzJICJfoX4QQu-YmtdMcxc_XDAaEJPZ5DrvqXvZJQ6uRk6rzcqVzL-ipToCXn-el6-y4h2wSNqWaNQopiK77NJCH9WEaFLWTmmB-RQ2XxBD1A-tiSMYdH5w5rGQIG2nKUDmhtdOJesTvqikN8Cs95__-pa=w1216-h912-no?authuser=0"
    },
    {
        idPet: 3,
        nombre:"Ángel",
        edad:8,
        tipo:"Canino",
        raza:"Criollo",
        links_foto:"https://lh3.googleusercontent.com/M_FcgyeU5UQ9lia0kJ7--HYurU8R0NNtO5BcpN7_RYaQgUL4LT8rpjBlqnlNr7eq4U_zJRuGQfAMwsM17Gu6fyAW2t9IbKTpCejteEDX5VWZTecfFafGKimrod8xbGCkMhdkeoS4TZNlW_m3eFYrsIKbGh-AdLHJOiOvGpGOrm7nN_83fsqbbhjgjmw7WEcSVYix0OTF32hg4dyutIekjYgbFyagLz1FfyUHlsTW3zNasfXvm9yCyZhK70JmlvuwU6YjILrbmGeuspbvUKfKbRYtt1F-h49PsqenxDaSKsPZHwvMGcyF9rYxaw6p-aQ2kLw9vsAJ4xDpmfSmcS0GbOgVyD1EGfmxKen4J3hDSZc-DExxCS5vt3IJAZWbYrpG4c9cOuVP4l4iTB3CaESWdpbm85mZeyN4j33TmgB1SHjUibsRDq_-1W7Mom3pgaJhbQu5luLN62i-g27fDUnlSkYh8HFYf5g5MpGBUzLJ8PBF0hxqvNchsnW1VHSWlSDbPFl1bKW8lIEyWDmn3RuV4tAb4sGjiPuB72yf2VwABpVXyqoLRtBUFQjpjBurJdyy1saMaGQPyO3oH2bUNvyUyIvKM2hQ9QnCgjojokjRvm1wWruOPngj6w5xTcKlNuBkoFiQghHrtTgxvusP6y_gw5WqjXrt4vRkDqAevdIVapPn48jzGrg_20STX7nUgbFrk3znttG4At3VCBBoGp7xwtD5Mf95T9kyLh6mUGoQtURPM7O9RxJY0SDjwLY=w1216-h912-no?authuser=0"
    },
    {
        idPet: 4,
        nombre:"Milo",
        edad:1,
        tipo:"Canino",
        raza:"Criollo",
        links_foto:"https://lh3.googleusercontent.com/M5NvGcZ0cB5BJa5Auf2HARRn0IwpZVvjrt3xWirIy_ckI1zjU1ziwGlHTpan6xk2GFIozo48yuno6UWOlN9inPXMI8VNRGql4NvUcDbNAVUveRVIBmx2mSXUcWcJMmirEcy3_VjK_tsv2Q1V7uF4jO-PHHp6xdb0zS0b6sVoZNEuU7xPAHyJ_E7swXRd-g-eC_lUsuJGWgrF_dNmC-ORdTB3bxd5Jjm5LNPOh4XYbIrpK3vRkXn4Ppx7kS1XONZiIa491xS8yAuqOP86FEc7zY9vELyeETl3PqJnq9SybS5Rg--wrwlIsyOmIaOYVSAI8JL82mRBZrU3O5l0i6j8J-VPvatj4JlqihAEoRyp3Sp8o6wo97iR68dtcK98pf3d2fw-FBaIfcyi_08c0lmynCPbPPlrFrRaX6nHuLz6o4qMFv0yodNaMmkMSwY7WuG8LVv0Vztof8XQ7bkiKjuKqkMqvrD3ZIiUroSFxCtWLKcgUrHnvB3MOVU4fAHnxTAI8A_BXaKR3RuYWEqkIO-xqDxPTAsFMF1cJryeSCATpAGKEKtmpQxQyETP56IbMlQ6vCgxEdd_2Ib9g15PlgStDI3PVw46-hLygv7mZ_ZypM1yfYjxBr-ptxW6R3pQUSe3VYgE9Xtq7Gi1O28P21vKpA-AClAwZjhs5qRgRMHoYwo_08y7weuDElKm4DQ97LBuQZ-34M6doMMjqoxkR2-19bUBYu_uOECg5OQAJ4qSR9hZ5VwUPN7iTtV9fFnd=w1216-h912-no?authuser=0"
    },
]
export default pets;