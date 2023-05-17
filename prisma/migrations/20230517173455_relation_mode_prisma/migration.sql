-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ApiKey` DROP FOREIGN KEY `ApiKey_userID_belongsToAdmin_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- RedefineIndex
CREATE INDEX `Account_userId_idx` ON `Account`(`userId`);
DROP INDEX `Account_userId_fkey` ON `Account`;

-- RedefineIndex
CREATE INDEX `ApiKey_userID_belongsToAdmin_idx` ON `ApiKey`(`userID`, `belongsToAdmin`);
DROP INDEX `ApiKey_userID_belongsToAdmin_fkey` ON `ApiKey`;

-- RedefineIndex
CREATE INDEX `Session_userId_idx` ON `Session`(`userId`);
DROP INDEX `Session_userId_fkey` ON `Session`;
