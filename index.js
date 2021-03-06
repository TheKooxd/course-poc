function getData(user_choise, user_table, callback) {
  const importance_template = {
    AI4: 2,
    AI5: 2,
    BI2: 1,
    ENA4: 2,
    ENA5: 2,
    ENA6: 2,
    FI2: 3,
    FY3: 2,
    FY5: 2,
    FY6: 2,
    KE3: 2,
    KE4: 2,
    KE5: 2,
    LI2: 2,
    LI6: 1,
    MAA10: 2,
    MAA11: 2,
    MAA6: 2,
    MAA7: 2,
    MAA8: 2,
    MAA9: 2,
    MU5: 3,
    MU6: 4,
    MU7: 4,
    PS3: 1,
    PS4: 1,
    PS5: 1,
    RUB3: 2,
    RUB4: 2,
    UE2: 2,
    YH2: 2,
    YH3: 2,
    HI2: 2,
    HI3: 3

  }
  const table_template = [
    [ //Eka jakso
      [
        {code: "FY3", groupid: "1", usercount: 0},
        {code: "KO1", groupid: "1", usercount: 0},
        {code: "PS3", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI11", groupid: "1", usercount: 0},
        {code: "BI3", groupid: "1", usercount: 0},
        {code: "PS6", groupid: "1", usercount: 0},
        {code: "MAA6", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI4", groupid: "1", usercount: 29},
        {code: "BI6", groupid: "1", usercount: 0},
        {code: "ESB5", groupid: "1", usercount: 0},
        {code: "FI3", groupid: "1", usercount: 0},
        {code: "HI5", groupid: "1", usercount: 0},
        {code: "MAA6", groupid: "2", usercount: 0}
      ],
      [
        {code: "AI4", groupid: "1", usercount: 0},
        {code: "KE4", groupid: "1", usercount: 0},
        {code: "MAA6", groupid: "3", usercount: 0},
        {code: "RAB5", groupid: "1", usercount: 0},
        {code: "TE4", groupid: "1", usercount: 0}
      ],
      [
        {code: "RAA10", groupid: "1", usercount: 0},
        {code: "RAB12", groupid: "1", usercount: 0},
        {code: "RUA4", groupid: "1", usercount: 0},
        {code: "RUB3", groupid: "1", usercount: 0},
        {code: "SAA4", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA4", groupid: "1", usercount: 0},
        {code: "KE4", groupid: "2", usercount: 0},
        {code: "KÄ1", groupid: "1", usercount: 0},
        {code: "RAA4", groupid: "1", usercount: 0},
        {code: "VEB1", groupid: "1", usercount: 0}
      ],
      [
        {code: "FY3", groupid: "1", usercount: 0},
        {code: "KU6", groupid: "1", usercount: 0},
        {code: "LI7", groupid: "1", usercount: 0},
        {code: "YH4", groupid: "1", usercount: 0}
      ],
      [
        {code: "BI4", groupid: "1", usercount: 0},
        {code: "LI4", groupid: "1", usercount: 0},
        {code: "MU7", groupid: "1", usercount: 0},
        {code: "MU13", groupid: "1", usercount: 0}
      ]
    ],
    [ //Toinen jakso
      [
        {code: "FI2", groupid: "1", usercount: 0},
        {code: "HI8", groupid: "1", usercount: 0},
        {code: "YH8", groupid: "1", usercount: 0},
        {code: "KE2", groupid: "1", usercount: 0},
        {code: "MAA7", groupid: "1", usercount: 0},
        {code: "MU8", groupid: "1", usercount: 0},
        {code: "RAA5", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI7", groupid: "1", usercount: 0},
        {code: "FY3", groupid: "3", usercount: 0},
        {code: "GE2", groupid: "1", usercount: 0},
        {code: "OPO1", groupid: "4", usercount: 0}
      ],
      [
        {code: "BI5", groupid: "1", usercount: 0},
        {code: "FI4", groupid: "1", usercount: 0},
        {code: "HI2", groupid: "1", usercount: 0},
        {code: "KE5", groupid: "1", usercount: 0},
        {code: "MU6", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA4", groupid: "2", usercount: 0},
        {code: "HI6", groupid: "1", usercount: 0},
        {code: "HI10", groupid: "1", usercount: 0},
        {code: "PS5", groupid: "1", usercount: 0},
        {code: "TE2", groupid: "1", usercount: 0},
        {code: "TI2", groupid: "1", usercount: 0},
        {code: "RUB3", groupid: "2", usercount: 0}
      ],
      [
        {code: "AI4", groupid: "3", usercount: 0},
        {code: "KE5", groupid: "2", usercount: 0},
        {code: "KU5", groupid: "1", usercount: 0},
        {code: "OPO1", groupid: "5", usercount: 0},
        {code: "YH6", groupid: "1", usercount: 0}
      ],
      [
        {code: "ESB6", groupid: "1", usercount: 0},
        {code: "MAA7", groupid: "2", usercount: 0},
        {code: "UE2", groupid: "1", usercount: 0},
        {code: "VEB2", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA4", groupid: "3", usercount: 0},
        {code: "HI2", groupid: "2", usercount: 0},
        {code: "KO1", groupid: "2", usercount: 0},
        {code: "MAB5", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI12", groupid: "1", usercount: 0},
        {code: "LI5", groupid: "1", usercount: 0},
        {code: "MAA7", groupid: "3", usercount: 0},
        {code: "OPO1", groupid: "6", usercount: 0},
        {code: "TO4", groupid: "1", usercount: 0}
      ]
    ],
    [ //Kolmas jakso
      [
        {code: "AI12", groupid: "1", usercount: 0},
        {code: "LI6", groupid: "1", usercount: 0},
        {code: "UE2", groupid: "2", usercount: 0}
      ],
      [
        {code: "BI2", groupid: "1", usercount: 0},
        {code: "ENA5", groupid: "1", usercount: 0},
        {code: "KE6", groupid: "1", usercount: 0},
        {code: "MAA8", groupid: "1", usercount: 0},
        {code: "MAB7", groupid: "1", usercount: 0},
      ],
      [
        {code: "AI7", groupid: "2", usercount: 0},
        {code: "BI7", groupid: "1", usercount: 0},
        {code: "MAA8", groupid: "2", usercount: 0}
      ],
      [
        {code: "HI2", groupid: "3", usercount: 0},
        {code: "RUA5", groupid: "1", usercount: 0},
        {code: "RUB4", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA5", groupid: "2", usercount: 0},
        {code: "FY5", groupid: "1", usercount: 0},
        {code: "PS7", groupid: "1", usercount: 0},
        {code: "TE3", groupid: "1", usercount: 0}
      ],
      [
        {code: "FI2", groupid: "2", usercount: 0},
        {code: "MAA8", groupid: "3", usercount: 0},
        {code: "SAA", groupid: "5", usercount: 0}
      ],
      [
        {code: "ENA5", groupid: "3", usercount: 0},
        {code: "ESB7", groupid: "1", usercount: 0},
        {code: "HI4", groupid: "1", usercount: 0},
        {code: "KE3", groupid: "1", usercount: 0}
      ],
      [
        {code: "LI6", groupid: "2", usercount: 0},
        {code: "MU5", groupid: "1", usercount: 0},
        {code: "RAB6", groupid: "1", usercount: 0},
        {code: "TO4", groupid: "1", usercount: 0}
      ]
    ],
    [ //Neljäs jakso
      [
        {code: "FY5", groupid: "2", usercount: 0},
        {code: "PS4", groupid: "1", usercount: 0},
        {code: "VEB3", groupid: "1", usercount: 0},
        {code: "YH2", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI5", groupid: "1", usercount: 0},
        {code: "FY5", groupid: "3", usercount: 0},
        {code: "RAA6", groupid: "1", usercount: 0},
        {code: "YH2", groupid: "2", usercount: 0}
      ],
      [
        {code: "BI3", groupid: "2", usercount: 0},
        {code: "MAA9", groupid: "1", usercount: 0},
        {code: "MAB6", groupid: "1", usercount: 0},
        {code: "UE2", groupid: "3", usercount: 0}
      ],
      [
        {code: "BI2", groupid: "2", usercount: 0},
        {code: "ENA6", groupid: "1", usercount: 0},
        {code: "HI3", groupid: "3", usercount: 0},
        {code: "RAB7", groupid: "1", usercount: 0},
        {code: "TI3", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA8", groupid: "2", usercount: 0},
        {code: "FI2", groupid: "3", usercount: 0},
        {code: "GE3", groupid: "1", usercount: 0},
        {code: "RUB4", groupid: "2", usercount: 0}
      ],
      [
        {code: "ENA6", groupid: "2", usercount: 0},
        {code: "KE2", groupid: "2", usercount: 0},
        {code: "MAA9", groupid: "2", usercount: 0},
        {code: "KU2", groupid: "1", usercount: 0},
        {code: "MU2", groupid: "1", usercount: 0}
      ],
      [
        {code: "KU2", groupid: "3", usercount: 0},
        {code: "LI2", groupid: "1", usercount: 0},
        {code: "MAA9", groupid: "2", usercount: 0},
        {code: "RUB5", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI5", groupid: "2", usercount: 0},
        {code: "MU5", groupid: "1", usercount: 0},
        {code: "LI2", groupid: "2", usercount: 0},
        {code: "LI2", groupid: "3", usercount: 0},
        {code: "KU2", groupid: "2", usercount: 0},
        {code: "MU2", groupid: "2", usercount: 0}
      ]
    ],
    [ //Viides jakso
      [
        {code: "ENA6", groupid: "3", usercount: 0},
        {code: "MAA11", groupid: "1", usercount: 0},
        {code: "SAA6", groupid: "1", usercount: 0},
        {code: "VEB4", groupid: "1", usercount: 0}
      ],
      [
        {code: "ESB8", groupid: "1", usercount: 0},
        {code: "FY6", groupid: "1", usercount: 0},
        {code: "MAA10", groupid: "1", usercount: 0},
        {code: "YH2", groupid: "3", usercount: 0}
      ],
      [
        {code: "AI5", groupid: "3", usercount: 0},
        {code: "ENA7", groupid: "2", usercount: 0},
        {code: "FY6", groupid: "2", usercount: 0},
        {code: "KE4", groupid: "3", usercount: 0},
        {code: "PS2", groupid: "1", usercount: 0}
      ],
      [
        {code: "GE4", groupid: "1", usercount: 0},
        {code: "KE3", groupid: "2", usercount: 0},
        {code: "MAA11", groupid: "2", usercount: 0},
        {code: "RAB8", groupid: "1", usercount: 0},
        {code: "YH4", groupid: "2", usercount: 0}
      ],
      [
        {code: "ENA7", groupid: "3", usercount: 0},
        {code: "MAA10", groupid: "2", usercount: 0},
        {code: "MAB8", groupid: "1", usercount: 0},
        {code: "PS2", groupid: "2", usercount: 0}
      ],
      [
        {code: "BI4", groupid: "2", usercount: 0},
        {code: "RUA6", groupid: "1", usercount: 0},
        {code: "RUB5", groupid: "2", usercount: 0}
      ],
      [
        {code: "ET2", groupid: "1", usercount: 0},
        {code: "MAA10", groupid: "3", usercount: 0}
      ],
      [
        {code: "FY6", groupid: "3", usercount: 0},
        {code: "HI3", groupid: "4", usercount: 0}
      ]
    ]
  ]
  let response = new Object();
  var table = []
  if (user_table === undefined) {
    table = table_template;
  } else {
    table = JSON.parse(user_table);
  }

  let importance = importance_template

  user_choise.forEach(function (val) {
    let val2 = val.replace(/\d/g, '')
    if (response[val2] === undefined) {
      response[val2] = new Array();
      response[val2].push(val)
    }
    else response[val2].push(val)
  })

  let temp = new Array();

  Object.keys(response).forEach((subject) => {
    response[subject].forEach((code_trying) => {
      table.forEach((periods, period_number) => {
        periods.forEach((period, bar_index) => {
          period.forEach((bar, slot_index) => {
            if (bar.code === code_trying) {
              temp.push({
                subject: subject,
                slot: slot_index,
                code: code_trying,
                period_number: period_number,
                bar_index: bar_index
              })
            }
          })
        })
      })
    })
  })

  temp = _.orderBy(temp, ['code'])
  let indexCache = 0;
  let cache = new Object();
  let grouppedBySubject = _.compact(temp.map((line, index) => {
    if (cache !== line.subject) {
      let setter = indexCache
      indexCache = index
      cache = line.subject;
      return temp.slice(setter, index)
    }
    else cache = line.subject;
  })).slice(1)
  grouppedBySubject.push(temp.slice(indexCache, temp.length))

  let bySubjectByCourse = grouppedBySubject.map((subjects) => {
    indexCache = 0;
    cache = subjects[0].code;
    let subjectSorted = _.compact(subjects.map((line, index5) => {
      if (cache !== line.code) {
        let setter = indexCache
        indexCache = index5
        cache = line.code;
        return subjects.slice(setter, index5)
      }
      else cache = line.code;
    }))
    subjectSorted.push(subjects.slice(indexCache, subjects.length))
    subjectSorted = _.orderBy(subjectSorted, ['code'])
    subjectSorted.importance = importance[subjectSorted[0][0].code]
    return subjectSorted
  })

  let matrix = new Array();
  let slotCache = new Array();
  let errorCache = new Array();
  let possibilities = {};

  _.orderBy(bySubjectByCourse, ['importance']).map((subject, subjectindex) => {
    subject.map((course, courseindex) => {
      let temp = course.map((ps) => {
        ps.count = table[ps.period_number][ps.bar_index][ps.slot].usercount;
        return ps;
      })
      temp = _.orderBy(temp, ['count'])
      let done = false
      let fixed = false
      temp.forEach((ps, index2) => {
        if (ps.count < 30) {
          if (possibilities[ps.code] === undefined) {
            possibilities[ps.code] = []
          }
          possibilities[ps.code].push(ps);
          if (!matrix.includes(String(ps.period_number) + String(ps.bar_index)) && ps.count < 30 && !done) {
            matrix.push(String(ps.period_number) + String(ps.bar_index))
            slotCache.push(ps.slot);
            table[ps.period_number][ps.bar_index][ps.slot].usercount++;
            done = true;
          }
          if (!fixed && !done && index2 + 1 === temp.length) {
            console.log("cannot find match for " + ps.code)
            console.log("Checking if there is a slot from lower importance course...")
            temp.forEach((val) => {
              console.log(val)
              console.log("======")
              let conflicting_course = getDataByMatrixId(String(val.period_number) + String(val.bar_index), table, slotCache, matrix);
              isUnusedSlots(possibilities[conflicting_course.course], table, matrix, ((res) => {
                console.log(res)
                console.log(fixed)
                if (!fixed) {
                  if (res.length > 0) {
                    console.log(res[0])
                    slotCache[matrix.indexOf(String(val.period_number) + String(val.bar_index))] = res[0].slot; //Vaihdetaan slottiin uusi slot index
                    table[conflicting_course.period][conflicting_course.bar][conflicting_course.slot].usercount--; //Vähennetään tablesta useri vanhasta kohdasta
                    table[res[0].period_number][res[0].bar_index][res[0].slot].usercount++; //Lisätään uusi osaanottaja siirettävään paikkaan
                    matrix[matrix.indexOf(String(val.period_number) + String(val.bar_index))] = String(res[0].period_number) + String(res[0].bar_index); //Muokataan matriisi entryä
                    matrix.push(String(val.period_number) + String(val.bar_index))
                    slotCache.push(val.slot);
                    table[ps.period_number][val.bar_index][val.slot].usercount++;
                    console.log("fixed")
                    fixed = true
                  }
                }
              }))
            })
          }
          if (!fixed && !done && index2 + 1 === temp.length) {
            console.log("error")
            errorCache.push({code: ps.code, error: "Ei sopinut lukkariin"});
          }
        }
        else {
          errorCache.push({code: ps.code, error: "Kurssit täynnä"});
        }
      })
    })
  })
  console.log(matrix)
  matrix = matrix.map((val, index3) => {
    return {
      period: val[0],
      bar: val[1],
      slot: slotCache[index3],
      course: table[val[0]][val[1]][slotCache[index3]].code + table[val[0]][val[1]][slotCache[index3]].groupid
    }
  })
  response = {
    success: matrix,
    failed: errorCache,
    table: table
  }
  callback(response);
}

function getDataByMatrixId(id, table, slotCache, matrix) {
  console.log(slotCache)
  return {
    period: id[0],
    bar: id[1],
    slot: slotCache[matrix.indexOf(id)],
    course: table[id[0]][id[1]][slotCache[matrix.indexOf(id)]].code,
    group: table[id[0]][id[1]][slotCache[matrix.indexOf(id)]].groupid
  }
}

function isUnusedSlots(possibilities, table, matrix, callback) {
  let response = []
  if (possibilities.length === 1) {
    callback(response)
  }
  else {
    possibilities.forEach((pos, index) => {
      if (!matrix.includes(String(pos.period_number) + String(pos.bar_index))) {
        response.push(pos);
      }
      if (possibilities.length === index + 1) {
        callback(response);
      }
    })
  }
}

function getCourses() {
  return [
    [ //Eka jakso
      [
        {code: "FY3", groupid: "1", usercount: 0},
        {code: "KO1", groupid: "1", usercount: 0},
        {code: "PS3", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI11", groupid: "1", usercount: 0},
        {code: "BI3", groupid: "1", usercount: 0},
        {code: "PS6", groupid: "1", usercount: 0},
        {code: "MAA6", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI4", groupid: "1", usercount: 29},
        {code: "BI6", groupid: "1", usercount: 0},
        {code: "ESB5", groupid: "1", usercount: 0},
        {code: "FI3", groupid: "1", usercount: 0},
        {code: "HI5", groupid: "1", usercount: 0},
        {code: "MAA6", groupid: "2", usercount: 0}
      ],
      [
        {code: "AI4", groupid: "1", usercount: 0},
        {code: "KE4", groupid: "1", usercount: 0},
        {code: "MAA6", groupid: "3", usercount: 0},
        {code: "RAB5", groupid: "1", usercount: 0},
        {code: "TE4", groupid: "1", usercount: 0}
      ],
      [
        {code: "RAA10", groupid: "1", usercount: 0},
        {code: "RAB12", groupid: "1", usercount: 0},
        {code: "RUA4", groupid: "1", usercount: 0},
        {code: "RUB3", groupid: "1", usercount: 0},
        {code: "SAA4", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA4", groupid: "1", usercount: 0},
        {code: "KE4", groupid: "2", usercount: 0},
        {code: "KÄ1", groupid: "1", usercount: 0},
        {code: "RAA4", groupid: "1", usercount: 0},
        {code: "VEB1", groupid: "1", usercount: 0}
      ],
      [
        {code: "FY3", groupid: "1", usercount: 0},
        {code: "KU6", groupid: "1", usercount: 0},
        {code: "LI7", groupid: "1", usercount: 0},
        {code: "YH4", groupid: "1", usercount: 0}
      ],
      [
        {code: "BI4", groupid: "1", usercount: 0},
        {code: "LI4", groupid: "1", usercount: 0},
        {code: "MU7", groupid: "1", usercount: 0},
        {code: "MU13", groupid: "1", usercount: 0}
      ]
    ],
    [ //Toinen jakso
      [
        {code: "FI2", groupid: "1", usercount: 0},
        {code: "HI8", groupid: "1", usercount: 0},
        {code: "YH8", groupid: "1", usercount: 0},
        {code: "KE2", groupid: "1", usercount: 0},
        {code: "MAA7", groupid: "1", usercount: 0},
        {code: "MU8", groupid: "1", usercount: 0},
        {code: "RAA5", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI7", groupid: "1", usercount: 0},
        {code: "FY3", groupid: "3", usercount: 0},
        {code: "GE2", groupid: "1", usercount: 0},
        {code: "OPO1", groupid: "4", usercount: 0}
      ],
      [
        {code: "BI5", groupid: "1", usercount: 0},
        {code: "FI4", groupid: "1", usercount: 0},
        {code: "HI2", groupid: "1", usercount: 0},
        {code: "KE5", groupid: "1", usercount: 0},
        {code: "MU6", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA4", groupid: "2", usercount: 0},
        {code: "HI6", groupid: "1", usercount: 0},
        {code: "HI10", groupid: "1", usercount: 0},
        {code: "PS5", groupid: "1", usercount: 0},
        {code: "TE2", groupid: "1", usercount: 0},
        {code: "TI2", groupid: "1", usercount: 0},
        {code: "RUB3", groupid: "2", usercount: 0}
      ],
      [
        {code: "AI4", groupid: "3", usercount: 0},
        {code: "KE5", groupid: "2", usercount: 0},
        {code: "KU5", groupid: "1", usercount: 0},
        {code: "OPO1", groupid: "5", usercount: 0},
        {code: "YH6", groupid: "1", usercount: 0}
      ],
      [
        {code: "ESB6", groupid: "1", usercount: 0},
        {code: "MAA7", groupid: "2", usercount: 0},
        {code: "UE2", groupid: "1", usercount: 0},
        {code: "VEB2", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA4", groupid: "3", usercount: 0},
        {code: "HI2", groupid: "2", usercount: 0},
        {code: "KO1", groupid: "2", usercount: 0},
        {code: "MAB5", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI12", groupid: "1", usercount: 0},
        {code: "LI5", groupid: "1", usercount: 0},
        {code: "MAA7", groupid: "3", usercount: 0},
        {code: "OPO1", groupid: "6", usercount: 0},
        {code: "TO4", groupid: "1", usercount: 0}
      ]
    ],
    [ //Kolmas jakso
      [
        {code: "AI12", groupid: "1", usercount: 0},
        {code: "LI6", groupid: "1", usercount: 0},
        {code: "UE2", groupid: "2", usercount: 0}
      ],
      [
        {code: "BI2", groupid: "1", usercount: 0},
        {code: "ENA5", groupid: "1", usercount: 0},
        {code: "KE6", groupid: "1", usercount: 0},
        {code: "MAA8", groupid: "1", usercount: 0},
        {code: "MAB7", groupid: "1", usercount: 0},
      ],
      [
        {code: "AI7", groupid: "2", usercount: 0},
        {code: "BI7", groupid: "1", usercount: 0},
        {code: "MAA8", groupid: "2", usercount: 0}
      ],
      [
        {code: "HI2", groupid: "3", usercount: 0},
        {code: "RUA5", groupid: "1", usercount: 0},
        {code: "RUB4", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA5", groupid: "2", usercount: 0},
        {code: "FY5", groupid: "1", usercount: 0},
        {code: "PS7", groupid: "1", usercount: 0},
        {code: "TE3", groupid: "1", usercount: 0}
      ],
      [
        {code: "FI2", groupid: "2", usercount: 0},
        {code: "MAA8", groupid: "3", usercount: 0},
        {code: "SAA", groupid: "5", usercount: 0}
      ],
      [
        {code: "ENA5", groupid: "3", usercount: 0},
        {code: "ESB7", groupid: "1", usercount: 0},
        {code: "HI4", groupid: "1", usercount: 0},
        {code: "KE3", groupid: "1", usercount: 0}
      ],
      [
        {code: "LI6", groupid: "2", usercount: 0},
        {code: "MU5", groupid: "1", usercount: 0},
        {code: "RAB6", groupid: "1", usercount: 0},
        {code: "TO4", groupid: "1", usercount: 0}
      ]
    ],
    [ //Neljäs jakso
      [
        {code: "FY5", groupid: "2", usercount: 0},
        {code: "PS4", groupid: "1", usercount: 0},
        {code: "VEB3", groupid: "1", usercount: 0},
        {code: "YH2", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI5", groupid: "1", usercount: 0},
        {code: "FY5", groupid: "3", usercount: 0},
        {code: "RAA6", groupid: "1", usercount: 0},
        {code: "YH2", groupid: "2", usercount: 0}
      ],
      [
        {code: "BI3", groupid: "2", usercount: 0},
        {code: "MAA9", groupid: "1", usercount: 0},
        {code: "MAB6", groupid: "1", usercount: 0},
        {code: "UE2", groupid: "3", usercount: 0}
      ],
      [
        {code: "BI2", groupid: "2", usercount: 0},
        {code: "ENA6", groupid: "1", usercount: 0},
        {code: "HI3", groupid: "3", usercount: 0},
        {code: "RAB7", groupid: "1", usercount: 0},
        {code: "TI3", groupid: "1", usercount: 0}
      ],
      [
        {code: "ENA8", groupid: "2", usercount: 0},
        {code: "FI2", groupid: "3", usercount: 0},
        {code: "GE3", groupid: "1", usercount: 0},
        {code: "RUB4", groupid: "2", usercount: 0}
      ],
      [
        {code: "ENA6", groupid: "2", usercount: 0},
        {code: "KE2", groupid: "2", usercount: 0},
        {code: "MAA9", groupid: "2", usercount: 0},
        {code: "KU2", groupid: "1", usercount: 0},
        {code: "MU2", groupid: "1", usercount: 0}
      ],
      [
        {code: "KU2", groupid: "3", usercount: 0},
        {code: "LI2", groupid: "1", usercount: 0},
        {code: "MAA9", groupid: "2", usercount: 0},
        {code: "RUB5", groupid: "1", usercount: 0}
      ],
      [
        {code: "AI5", groupid: "2", usercount: 0},
        {code: "MU5", groupid: "1", usercount: 0},
        {code: "LI2", groupid: "2", usercount: 0},
        {code: "LI2", groupid: "3", usercount: 0},
        {code: "KU2", groupid: "2", usercount: 0},
        {code: "MU2", groupid: "2", usercount: 0}
      ]
    ],
    [ //Viides jakso
      [
        {code: "ENA6", groupid: "3", usercount: 0},
        {code: "MAA11", groupid: "1", usercount: 0},
        {code: "SAA6", groupid: "1", usercount: 0},
        {code: "VEB4", groupid: "1", usercount: 0}
      ],
      [
        {code: "ESB8", groupid: "1", usercount: 0},
        {code: "FY6", groupid: "1", usercount: 0},
        {code: "MAA10", groupid: "1", usercount: 0},
        {code: "YH2", groupid: "3", usercount: 0}
      ],
      [
        {code: "AI5", groupid: "3", usercount: 0},
        {code: "ENA7", groupid: "2", usercount: 0},
        {code: "FY6", groupid: "2", usercount: 0},
        {code: "KE4", groupid: "3", usercount: 0},
        {code: "PS2", groupid: "1", usercount: 0}
      ],
      [
        {code: "GE4", groupid: "1", usercount: 0},
        {code: "KE3", groupid: "2", usercount: 0},
        {code: "MAA11", groupid: "2", usercount: 0},
        {code: "RAB8", groupid: "1", usercount: 0},
        {code: "YH4", groupid: "2", usercount: 0}
      ],
      [
        {code: "ENA7", groupid: "3", usercount: 0},
        {code: "MAA10", groupid: "2", usercount: 0},
        {code: "MAB8", groupid: "1", usercount: 0},
        {code: "PS2", groupid: "2", usercount: 0}
      ],
      [
        {code: "BI4", groupid: "2", usercount: 0},
        {code: "RUA6", groupid: "1", usercount: 0},
        {code: "RUB5", groupid: "2", usercount: 0}
      ],
      [
        {code: "ET2", groupid: "1", usercount: 0},
        {code: "MAA10", groupid: "3", usercount: 0}
      ],
      [
        {code: "FY6", groupid: "3", usercount: 0},
        {code: "HI3", groupid: "4", usercount: 0}
      ]
    ]
  ]

}
