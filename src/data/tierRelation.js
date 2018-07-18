const tierRelation = {
  Any: ["Uber", "OU", "UU", "UUBL", "RU", "RUBL", "NU", "NUBL", "PU", "PUBL", "LC"],
  Uber: ["Uber"],
  OU: ["OU", "UUBL"],
  UU: ["UU", "RUBL"],
  UUBL: ["UUBL"],
  RU: ["RU", "NUBL"],
  RUBL: ["RUBL"],
  NU: ["NU", "PUBL"],
  NUBL: ["NUBL"],
  PU: ["PU"],
  PUBL: ["PUBL"],
  LC: ["LC"]
}

export default tierRelation
