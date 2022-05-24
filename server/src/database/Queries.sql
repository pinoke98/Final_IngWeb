/****** Diagrama Pastel  ******/
SELECT	Chain, Sales FROM Retail_Analysis.dbo.Fact_Sales

/****** Barras Dobles  ******/

select	fs.Sales,fs.Chain,r.State from Retail_Analysis.dbo.Fact_Sales as fs inner join Retail_Analysis.dbo.Managers as m on m.Postcode = fs.Postcode inner join Retail_Analysis.dbo.Regions as r on r.Suburb = m.Suburb

/****** Barras  ******/
select	fs.Sales,m.Manager,r.State from Retail_Analysis.dbo.Fact_Sales as fs inner join Retail_Analysis.dbo.Managers as m on m.Postcode = fs.Postcode inner join Retail_Analysis.dbo.Regions as r on r.Suburb = m.Suburb

/****** Stacked barplot  ******/
select	fs.Sales, fs.Chain, fs.Category from Retail_Analysis.dbo.Fact_Sales as fs

/****** Map  ******/
select	fs.Sales, r.State, r.StateCountry from Retail_Analysis.dbo.Fact_Sales as fs inner join Retail_Analysis.dbo.Managers as m on m.Postcode = fs.Postcode inner join Retail_Analysis.dbo.Regions as r on r.Suburb = m.Suburb