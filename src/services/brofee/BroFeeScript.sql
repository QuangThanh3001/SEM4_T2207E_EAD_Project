USE BROFEE
-- BROKER TABLE
CREATE TABLE BROKER_T (
    BROKER_ID UNIQUEIDENTIFIER PRIMARY KEY,
    FULL_NAME NVARCHAR(255) NOT NULL,
	ADDRESS NVARCHAR(255) NULL,
	PHONE_NUMBER NVARCHAR(14) UNIQUE NOT NULL,
	EMAIL NVARCHAR(128) UNIQUE NOT NULL,
);

-- RELATIONSHIPS TABLE
CREATE TABLE RELATIONSHIP_T (
    BROKER_PARENT_ID UNIQUEIDENTIFIER,
	BROKER_CHILD_ID UNIQUEIDENTIFIER,
    FOREIGN KEY (BROKER_PARENT_ID) REFERENCES BROKER_T(BROKER_ID),
    FOREIGN KEY (BROKER_CHILD_ID) REFERENCES BROKER_T(BROKER_ID),
    PRIMARY KEY (BROKER_PARENT_ID, BROKER_CHILD_ID)
);


-- Thêm bản ghi vào bảng BROKER_T
INSERT INTO BROKER_T (BROKER_ID, FULL_NAME, ADDRESS, PHONE_NUMBER, EMAIL) VALUES
(NEWID(), N'John Doe', N'123 Main St, City, Country', N'1234567890', N'john.doe@example.com'),
(NEWID(), N'Alice Smith', N'456 Elm St, City, Country', N'0987654321', N'alice.smith@example.com'),
(NEWID(), N'Bob Johnson', N'789 Oak St, City, Country', N'9876543210', N'bob.johnson@example.com'),
(NEWID(), N'Emily Davis', N'321 Pine St, City, Country', N'8765432109', N'emily.davis@example.com'),
(NEWID(), N'Michael Wilson', N'654 Birch St, City, Country', N'7654321098', N'michael.wilson@example.com'),
(NEWID(), N'Sarah Brown', NULL, N'6543210987', N'sarah.brown@example.com'),
(NEWID(), N'David Garcia', NULL, N'5432109876', N'david.garcia@example.com'),
(NEWID(), N'Emma Martinez', NULL, N'4321098765', N'emma.martinez@example.com'),
(NEWID(), N'Daniel Rodriguez', NULL, N'3210987654', N'daniel.rodriguez@example.com'),
(NEWID(), N'Olivia Hernandez', NULL, N'2109876543', N'olivia.hernandez@example.com');

-- Thêm bản ghi vào bảng RELATIONSHIP_T
DECLARE @Broker1 UNIQUEIDENTIFIER = (SELECT TOP 1 BROKER_ID FROM BROKER_T WHERE FULL_NAME = N'John Doe');
DECLARE @Broker2 UNIQUEIDENTIFIER = (SELECT TOP 1 BROKER_ID FROM BROKER_T WHERE FULL_NAME = N'Alice Smith');
DECLARE @Broker3 UNIQUEIDENTIFIER = (SELECT TOP 1 BROKER_ID FROM BROKER_T WHERE FULL_NAME = N'Bob Johnson');
DECLARE @Broker4 UNIQUEIDENTIFIER = (SELECT TOP 1 BROKER_ID FROM BROKER_T WHERE FULL_NAME = N'Emily Davis');
DECLARE @Broker5 UNIQUEIDENTIFIER = (SELECT TOP 1 BROKER_ID FROM BROKER_T WHERE FULL_NAME = N'Michael Wilson');

INSERT INTO RELATIONSHIP_T (BROKER_PARENT_ID, BROKER_CHILD_ID) VALUES
(@Broker1, @Broker2),
(@Broker1, @Broker3),
(@Broker2, @Broker4),
(@Broker3, @Broker4),
(@Broker4, @Broker5),
(@Broker2, @Broker5),
(@Broker3, @Broker1),
(@Broker1, @Broker5),
(@Broker4, @Broker1),
(@Broker5, @Broker2)


IF OBJECT_ID('GETPARENTCHAIN', 'P') IS NOT NULL
BEGIN
    DROP PROCEDURE GETPARENTCHAIN;
END
GO
/*##################################################################################################    
♣ PROCEDURE ID : [GETPARENTCHAIN]  
♣ PROGRAM NAME :  
♣ DESCRIPTION :   
   ENG:  
   KOR:  
   VIE:   
     
---------------------------------------------------------------------------------------------    
♣ DATE        WRITER    CHANGE HISTORY  
---------------------------------------------------------------------------------------------    
2024-03-11    CUONGNX      CREATED    
---------------------------------------------------------------------------------------------    
♣ SAMPLE EXCUTE :    
EXEC GETPARENTCHAIN 'A38B0BFD-A955-4D16-BC13-02BA57575293'
---------------------------------------------------------------------------------------------    
♣ NOTE :     
  
####################################################################################################*/  
CREATE PROCEDURE GETPARENTCHAIN
    @CHILDID UNIQUEIDENTIFIER
AS
BEGIN
   
    BEGIN
        WITH PARENTCHAIN AS (
            SELECT 1 AS LEVEL,BROKER_PARENT_ID, BROKER_CHILD_ID
            FROM RELATIONSHIP_T
            WHERE BROKER_CHILD_ID = @CHILDID

            UNION ALL

            SELECT PC.LEVEL + 1, R.BROKER_PARENT_ID, R.BROKER_CHILD_ID
            FROM RELATIONSHIP_T R
            INNER JOIN PARENTCHAIN PC ON R.BROKER_CHILD_ID = PC.BROKER_PARENT_ID
			WHERE PC.LEVEL <10
        )
        SELECT B.BROKER_ID, B.FULL_NAME, B.ADDRESS, B.PHONE_NUMBER, B.EMAIL
        FROM BROKER_T B
        WHERE B.BROKER_ID IN (SELECT BROKER_PARENT_ID FROM PARENTCHAIN);
    END;
END;
GO

-- STORED PROCEDURE ĐỂ LẤY DANH SÁCH CON
IF OBJECT_ID('GETCHILDREN', 'P') IS NOT NULL
BEGIN
    DROP PROCEDURE GETCHILDREN;
END
GO
/*##################################################################################################    
♣ PROCEDURE ID : [GETPARENTCHAIN]  
♣ PROGRAM NAME :  
♣ DESCRIPTION :   
   ENG:  
   KOR:  
   VIE:   
     
---------------------------------------------------------------------------------------------    
♣ DATE        WRITER    CHANGE HISTORY  
---------------------------------------------------------------------------------------------    
2024-03-11    CUONGNX      CREATED    
---------------------------------------------------------------------------------------------    
♣ SAMPLE EXCUTE :    
EXEC GETPARENTCHAIN 'A38B0BFD-A955-4D16-BC13-02BA57575293'
---------------------------------------------------------------------------------------------    
♣ NOTE :     
  
####################################################################################################*/  
CREATE PROCEDURE GETCHILDREN
    @PARENTID UNIQUEIDENTIFIER
AS
BEGIN
   
    BEGIN
        WITH CHILDRENCHAIN AS (
            SELECT 1 AS LEVEL, BROKER_PARENT_ID, BROKER_CHILD_ID
            FROM RELATIONSHIP_T
            WHERE BROKER_PARENT_ID = @PARENTID

            UNION ALL

            SELECT CC.LEVEL + 1, R.BROKER_PARENT_ID, R.BROKER_CHILD_ID
            FROM RELATIONSHIP_T R
            INNER JOIN CHILDRENCHAIN CC ON R.BROKER_PARENT_ID = CC.BROKER_CHILD_ID
			where CC.LEVEL <10
        )
        SELECT B.BROKER_ID, B.FULL_NAME, B.ADDRESS, B.PHONE_NUMBER, B.EMAIL
        FROM BROKER_T B
        WHERE B.BROKER_ID IN (SELECT BROKER_CHILD_ID FROM CHILDRENCHAIN);
    END;
END;
GO

EXEC GETPARENTCHAIN '57FE1FD4-BD40-47BE-B18E-1A7F5FB1B862'
EXEC GETPARENTCHAIN 'A38B0BFD-A955-4D16-BC13-02BA57575293'










