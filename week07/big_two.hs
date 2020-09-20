data Suit = Diamond | Club | Heart | Spade

instance Show Suit where
  show Diamond = "D"
  show Club = "C"
  show Heart = "H"
  show Spade = "S"

instance Eq Suit where
  Diamond == Diamond = True
  Club == Club = True
  Heart == Heart = True
  Spade == Spade = True
  _ == _ = False

instance Ord Suit where
  compare Spade Heart = GT
  compare Spade Club = GT
  compare Spade Diamond = GT
  compare Heart Club = GT
  compare Heart Diamond = GT
  compare Club Diamond = GT
  compare Heart Spade = LT
  compare Club Spade = LT
  compare Diamond Spade = LT
  compare Club Heart = LT
  compare Diamond Heart = LT
  compare Diamond Club = LT
  compare _ _ = EQ
