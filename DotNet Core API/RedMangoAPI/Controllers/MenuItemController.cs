using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RedMango_API.Models;
using RedMangoAPI.Data;
using RedMangoAPI.Model;
using RedMangoAPI.Model.DOT;
using RedMangoAPI.Service;
using RedMangoAPI.Utility;
using System;
using System.Net;
using System.Text.RegularExpressions;

namespace RedMangoAPI.Controllers
{
    [Route("api/MenuItem")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        //Dependency Injection
        private readonly ApplicationDbContext _db;
        private readonly ApiResponse _response;
        private readonly IBlobService _blobService;
        public MenuItemController(ApplicationDbContext dbContext, IBlobService blobService)
        {
            _db = dbContext;
            _response = new ApiResponse();
            _blobService = blobService;
        }
        //Method to get all Item in MenuItem Table
        [HttpGet]
        public async Task<IActionResult> GetMenuItems()
        {
            _response.Result = await _db.MenuItems.ToListAsync();
            _response.StatusCode = HttpStatusCode.OK;
            return Ok(_response);
        }
        [Route("GetMenuItemByID/{ID:int}")]
        [HttpGet]
        public async Task<IActionResult> GetMenuItem(int ID)
        {
            //Edge case
            if (ID == 0)
            {
                _response.StatusCode = HttpStatusCode.BadRequest;
                _response.ErrorMessages = new List<string>()
                {
                    "ID 0 is not exist"
                };
                return BadRequest(_response);
            }
            //Response
            MenuItem menuItem = await _db.MenuItems.FirstOrDefaultAsync(item => item.Id == ID);
            if (menuItem == null)
            {
                _response.StatusCode = HttpStatusCode.NotFound;
                _response.ErrorMessages = new List<string>()
                {
                    $"No Data with the ID : {ID}"
                };
                return NotFound(_response);
            }
            _response.StatusCode = HttpStatusCode.NotFound;
            _response.Result = menuItem;
            return Ok(_response);
        }
        [Route("CreateItem")]
        [HttpPost]
        public async Task<IActionResult> CreateItem([FromForm] MenuItemCreateDTO obj)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (obj.Image == null || obj.Image.Length == 0)
                    {
                        _response.ErrorMessages.Add("Image File is empty");
                        _response.IsSuccess = false;
                        return BadRequest(_response);
                    }
                    string fileName = $"{Guid.NewGuid()}{Path.GetExtension(obj.Image.FileName)}";
                    MenuItem menuItemCreateDTO = new MenuItem()
                    {
                        Id = obj.Id,
                        Name = obj.Name,
                        Category = obj.Category,
                        Description = obj.Description,
                        Price = obj.Price,
                        SpecialTag = obj.SpecialTag,
                        Image = await _blobService.UploadBlob(fileName, SD.Storage_Container_Name, obj.Image)
                    };
                    _db.Add(menuItemCreateDTO);
                    _db.SaveChanges();
                    _response.Result = "Item Added Success Fully";
                    return Ok(_response);
                }
                else
                {
                    _response.ErrorMessages.Add("Validation Failure...");
                    _response.IsSuccess = false;
                    return BadRequest(_response);
                }
            }
            catch (Exception ex)
            {
                _response.ErrorMessages.Add(ex.Message);
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
        }
        [Route("UpdateItem/{ID:int}")]
        [HttpPut]
        public async Task<IActionResult> UpdateItem([FromForm] MenuItemUpdateDTO obj, int ID)
        {
            try
            {
                // Regex validation is unnecessary because the parameter is of type `int`. 
                // If a non-integer value is passed, .NET will automatically throw a bad request error.
                if (ID == 0)
                {
                    _response.StatusCode = HttpStatusCode.BadRequest;
                    _response.ErrorMessages.Add("Enter the Valid parameter");
                }
                if (!ModelState.IsValid)
                {
                    _response.ErrorMessages.Add("Validation Failure...");
                    _response.IsSuccess = false;
                    return BadRequest(_response);
                }
                
                //Go to the Particular ID
                MenuItem menu = await _db.MenuItems.FindAsync(ID);
                if (menu == null)
                {
                    _response.ErrorMessages.Add("Menu Item Not Found...");
                    _response.IsSuccess = false;
                    return BadRequest(_response);
                }
                menu.Id = ID;
                menu.Name = obj.Name;
                menu.Category = obj.Category;
                menu.Description = obj.Description;
                menu.Price = obj.Price;
                menu.SpecialTag = obj.SpecialTag;
                if (obj.File != null || obj.File.Length > 0)
                {
                    string fileName = $"{Guid.NewGuid()}{Path.GetExtension(obj.File.FileName)}";
                    //Delete existing Image
                    bool isImageDel = await _blobService.DeleteBlob(menu.Image.Split('/').Last(), SD.Storage_Container_Name);
                    if (isImageDel)
                    {
                        _response.ErrorMessages.Add("Image File Deletion Failed...");
                        _response.IsSuccess = false;
                        return BadRequest(_response);
                    }
                     menu.Image = await _blobService.UploadBlob(fileName, SD.Storage_Container_Name, obj.File);
                }
                _db.Update(menu);
                _db.SaveChanges();
                _response.StatusCode=HttpStatusCode.NoContent;
                _response.Result = "Item Updated SuccessFully";
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.ErrorMessages.Add(ex.Message);
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
        }
    }
}