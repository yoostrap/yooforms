import { frontend as required } from './required';
import { frontend as maxdate } from './maxdate';
import { frontend as mindate } from './mindate';
import { frontend as maxnumber } from './maxnumber';
import { frontend as minnumber } from './minnumber';
import { frontend as maxitems } from './maxitems';
import { frontend as minitems } from './minitems';
import { frontend as maxlength } from './maxlength';
import { frontend as minlength } from './minlength';

export default {
    [required.name]: required,
    [maxdate.name]: maxdate,
    [mindate.name]: mindate,
    [maxnumber.name]: maxnumber,
    [minnumber.name]: minnumber,
    [maxitems.name]: maxitems,
    [minitems.name]: minitems,
    [maxlength.name]: maxlength,
    [minlength.name]: minlength,
};
