﻿using Microsoft.EntityFrameworkCore;

namespace WebAPP.Areas.Organizers.Data
{
    #pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    [Index(nameof(Title), nameof(ParentId), IsUnique = true)]
    public class Section : SectionBase
    {
        public int ParentId { get; set; }
        public SectionBase Parent { get; set; }
    }
    #pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
}
