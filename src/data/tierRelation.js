const tierRelation = {
  Any: ["Uber", "OU", "UU", "UUBL", "RU", "RUBL", "NU", "NUBL", "PU", "PUBL", "LC"],
  Uber: ["Uber"],
  OU: ["OU"],
  UU: ["UU", "UUBL"],
  UUBL: ["UUBL"],
  RU: ["RU", "RUBL"],
  RUBL: ["RUBL"],
  NU: ["NU", "NUBL"],
  NUBL: ["NUBL"],
  PU: ["PU", "PUBL"],
  PUBL: ["PUBL"],
  LC: ["LC"]
}

export default tierRelation
