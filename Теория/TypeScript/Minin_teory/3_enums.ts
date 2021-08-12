// ENUMS
enum MemberShip {
  Simple, // 0
  Standart, // 1
  Premium, // 2
}

const membership = MemberShip.Simple; // 0
const membershipReverse = MemberShip[1]; // Standart

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const mediaVk = SocialMedia.VK; // VK
const mediaFB = SocialMedia.FACEBOOK; // FACEBOOK
const mediaInst = SocialMedia[2]; // INSTAGRAM
